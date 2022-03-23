import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

import styled from "styled-components"

import { standardWrapper, B1Black, H1Black } from "../styles/helpers"

const DisclaimerStyled = styled.div`
  ${standardWrapper};

  h1,
  h2 {
    ${H1Black};
    width: 100%;
  }

  p,
  li {
    ${B1Black};
  }

  ul {
    @media (min-width: 768px) {
      padding-left: 2.5rem;
    }
  }

  li {
    margin-bottom: 1.5rem;
    list-style: disc;
  }
`

const Disclaimer = () => {
  return (
    <Layout>
      <Seo
        title="Disclaimer - Happy Paws Veterinary Clinic"
        description="The information contained in this website is for general information purposes only. This website makes no representations or warranties, express or implied."
      />
      <DisclaimerStyled>
        <div>
          <h1>Disclaimer</h1>
        </div>
        <div>
          <p>
            The information contained in this website is for general information
            purposes only. This website makes no representations or warranties,
            express or implied. Happy Paws Veterinary Clinic makes no
            representations or warranties related to this website or the
            information and materials provided on this website. Happy Paws
            Veterinary Clinic does not warrant that this website will be
            available at any or all times, or that the information contained on
            this website is accurate, complete, non-misleading or true. No
            information on this website is intended as advice of any kind. Happy
            Paws Veterinary Clinic makes no representations or warranties of any
            kind, express or implied, about the completeness, accuracy,
            reliability, suitability or availability with respect to the website
            or the information, products, services, or related graphics
            contained on the website for any purpose. Any reliance you place on
            such information is therefore strictly at your own risk.
          </p>
          <p>
            Happy Paws Veterinary Clinic assumes no liability in relation to the
            contents of, or use of this website including any indirect, special
            or consequential loss or for any business losses, loss of revenue,
            income, profits or anticipated savings, loss of contracts or
            business relationships, loss of reputation or goodwill, or loss or
            corruption of information or data.
          </p>
          <p>
            The materials on Happy Paws Veterinary Clinic website are provided
            on an ‘as is’ basis. Happy Paws Veterinary Clinic’s makes no
            warranties, expressed or implied, and hereby disclaims and negates
            all other warranties including, without limitation, implied
            warranties or conditions of merchantability, fitness for a
            particular purpose, or non-infringement of intellectual property or
            other violation of rights.
          </p>
          <p>
            Further, Happy Paws Veterinary Clinic does not warrant or make any
            representations concerning the accuracy, likely results, or
            reliability of the use of the materials on its website or otherwise
            relating to such materials or on any sites linked to this site.
          </p>
          <p>
            Through this website you are able to link to other websites which
            are not under the control of “Happy Paws Veterinary Clinic”. We have
            no control over the nature, content and availability of those sites.
            The inclusion of any links does not necessarily imply a
            recommendation or endorse the views expressed within them.
          </p>
          <p>
            Your use of this website signifies your agreement that the
            exclusions and limitations of liability set out in this website
            disclaimer are reasonable. If you find anything within this
            disclaimer to be unreasonable you must not use this website.
          </p>
        </div>
        <div>
          <h2>Copyright</h2>
        </div>
        <div>
          <p>
            Copyright © Happy Paws Veterinary Clinic All Rights Reserved. All
            text, images, graphics, and other materials on this website are
            subject to the copyright and other intellectual property rights of
            Happy Paws Veterinary Clinic, unless otherwise stated. These
            materials may not be reproduced, distributed, modified or reposted
            to other websites without the express written permission of Happy
            Paws Veterinary Clinic.
          </p>
        </div>
      </DisclaimerStyled>
    </Layout>
  )
}

export default Disclaimer
