import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'
import Hero from '../components/Hero';
import SectionQui from '../components/SectionQui';
import SectionQuoi from '../components/SectionQuoi';
import SectionComment from '../components/SectionComment';
import colors from '../components/colors';

export const HomePageTemplate = ({ titre, image_intro, section_qui, section_quoi, section_comment, section_participer }) => {
  console.log('titre', titre)
  console.log('image_intro', image_intro)
  console.log('section_qui', section_qui)
  console.log('section_quoi', section_quoi)
  console.log('section_comment', section_comment)
  console.log('section_participer', section_participer)
  const sections = [
    {
      anchor: 'section_qui',
      texte_bouton: section_qui.texte_bouton
    },
    {
      anchor: 'section_quoi',
      texte_bouton: section_quoi.texte_bouton
    },
    {
      anchor: 'section_comment',
      texte_bouton: section_comment.texte_bouton
    },
    {
      anchor: 'section_participer',
      texte_bouton: section_participer.texte_bouton
    },
  ]
  return (
    <Fragment>
      <Hero image={image_intro} titre={titre} sections={sections}/>
      <SectionQui color={colors.green} {...section_qui} />
      <SectionQuoi color={colors.blue} {...section_quoi} negative />
      <SectionComment color={colors.orange} {...section_comment} />
    </Fragment>
 
  )
}

HomePageTemplate.propTypes = {
 
}

const HomePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <HomePageTemplate
      {...post.frontmatter}
    />
  )
}

HomePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default HomePage

export const homePageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        titre
        image_intro
        section_qui {
          texte_bouton
          titre
          parties {
            titre
            texte
            images {
              image
              legende
              lien_youtube
            }
          }
          parrains {
            texte_intro
            texte_outro
            texte_autre_parrains
            parrains {
              nom
              mettre_en_avant
              type
              metier
              image
              lien_youtube
            }
            images {
              image
              legende
              lien_youtube
            }
          }        
        }
        section_quoi {
          texte_bouton
          titre
          parties {
            titre
            texte
            images {
              image
              legende
              lien_youtube
            }
          }
        }
        section_comment {
          texte_bouton
          titre
          parties {
            titre
            texte
            images {
              image
              legende
              lien_youtube
            }
          }
        }
        section_participer {
          texte_bouton
          titre
          parties {
            titre
            texte
            images {
              image
              legende
              lien_youtube
            }
          }
        }
      }
    }
  }
`
