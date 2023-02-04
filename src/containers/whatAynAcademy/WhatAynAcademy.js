import React from 'react'
import { Feature } from '../../components'
import './whatAynAcademy.css'

const WhatAynAcademy = () => {
  return (
    <div className='ayn__whataynacademy section__margin' id='whatayn'>
      <div className="ayn__whataynacademy-feature">
        <Feature title="لماذا عين !؟" text="في عالمٍ مليءٍ بالنداءات والدعوات
                                            صاخبٍ بالضجيج والتيارات
                                            تشغلنا فيه الحيرة والتساؤلات
                                            نحتاج إلى عين...
                                            عينٍ صافيةٍ عذبةٍ ننهل منها لنروي ظمأ أسئلتنا، عن الوجود والحياة، عن دورنا فيها،
                                            عن السعادة ما هي وكيف نجنيها !؟
                                            عن الإنسان ما هو !؟ وإلى أين يسير؟" />

        
      </div>
      <div className="ayn__whataynacademy-heading">
        <h1 className='gradient__text'>
          فرص التطور والتعلم معنا أكبر مما تتخيل
        </h1>
        <p>تصفح المكتبة</p>
      </div>
      <div className="ayn__whataynacademy-container">
        <Feature title="الإبداع" text="مناهج منصة عين هي مناهج أصيلة، قام فريق المنصة بتأليفها وتطويرها وتحويلها إلى دورات ونشاطات وألعاب بما يحقق الفائدة والمتعة للطلاب/المتدربين."/>
        <Feature title="العملية" text="لا يوجد شيء من مناهج ودورات منصة عين ليس له تطبيق عملي، بل هي متفاعلة بشكل تام مع الواقع لفهمه بشكل أفضل وللتعامل معه ولتغييره." />
        <Feature title="المنهجية" text="شبر من معرفة منهجية خير من بحر من المعلومات المبعثرة، لذلك نركز في المنصة على أن تقدم المناهج معرفة حقيقية تساعد في تنظيم العقل وتزيد فاعليته، لا تشتته ولا توهمه بمعرفة مزيفة."/>
      </div>
    </div>
  )
}

export default WhatAynAcademy