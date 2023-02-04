import React from 'react'
import possibilityImage from "../../assets/possibility.png";
import './possibility.css'

const Possibility = () => {
  return (
    <div className='ayn__possibility section__padding' id='possibility'>
      <div className="ayn__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="ayn__possibility-content">
        <h4>سارع في طلب الإنضمام اليوم والتحق بدوراتنا.</h4>
        <h1 className="gradient__text">فرص التطور والتعلم معنا أكبر مما تتخيل</h1>
        <p>حرصنا أثناء إعداد المناهج على أن تكون المادة عمليةً متينةً، وفي الوقت ذاته مفيدةً عملياً، كما حرصنا على أن تكون طريقة العرض والإعطاء مبدعة في الوسائل. لن نعتمد أسلوب التلقين في الأكاديمية، بل التدريب النشط التفاعلي، حيث ستكون لدينا مساحات واسعة من الحوارات التي نناقش فيها قضايا معاصرة مهمة، كما أننا سنعتمد على أسلوب الألعاب في تبسيط الأفكار وفي خلق جو من التحفيز والمتعة، وكذلك الأمر مع المسابقات والمناظرات. كما أن الشباب سيكونون شركاء معنا في المنصة في إعداد مشاريع ومنتجات تكون تطبيقاً لما سيتعلمونه وإضافة للمنهاج وللمنصة ككل.</p>
        <h4>سارع في طلب الإنضمام اليوم والتحق بدوراتنا.</h4>
      </div>
    </div>
  )
}

export default Possibility