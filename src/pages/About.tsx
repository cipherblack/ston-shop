import { Award, Users, Factory, Clock } from 'lucide-react';

const About = () => {
  return (
    <div className="rtl">
      <section className="relative py-80">
        <div className="absolute inset-0">
          <img
            src="/image/about.jpg"
            alt="Factory"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white"> سنگ آوش </h1>
            <p className="text-xl max-w-3xl mx-auto">
              با بیش از ۲۰ سال تجربه در صنعت سنگ، ما متعهد به ارائه بهترین محصولات و خدمات به مشتریان خود هستیم.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6"> درباره صنایع سنگ آوش </h2>
              <p className="text-gray-700 mb-4 font-bold">

                مجموعه سنگ آوش با بیش از ۲۰ سال سابقه درخشان در زمینه تولید سنگ‌های ساختمانی، یکی از برترین تولیدکنندگان سنگ‌های ساختمانی در کشور است. این مجموعه با مدیریت برادران نقدعلی در فضایی به مساحت ۱۰هزار متر مربع در شهرک صنعتی محمودآباد واقع در استان اصفهان فعالیت می‌کند. هدف این مجموعه تولید سنگ‌های باکیفیت و ارائه محصولات با استانداردهای روز می‌باشد. 
              
              </p>
              <p className="text-gray-700 mb-4 font-bold">

  محصولات این مجموعه شامل انواع سنگ‌های تراورتن در طیف‌های رنگی مختلف مانند سنگ تراورتن سفید، سنگ تراورتن کرم روشن، سنگ تراورتن کرم، سنگ تراورتن نسکافه‌ای و سنگ تراورتن شکلاتی و مرمریت مشکی لاشتر است که با دقت و بهره‌گیری از ماشین‌آلات مدرن و تکنولوژی‌های پیشرفته در مجموعه آوش تولید و به بازار عرضه می‌گردد. شایان ذکر است که طی سال‌های اخیر تمرکز این مجموعه در تولید تخصصی سنگ تراورتن تکاب بوده و توانایی تولید انبوه سنگ تراورتن تکاب را دارد و جزء تولید کننده های تخصصی سنگ تراورتن تکاب در کشور می‌باشد              </p>
            
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <Award className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">کیفیت برتر</h3>
                <p className="text-gray-600">استانداردهای بین‌المللی</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <Users className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">+۱۰۰۰</h3>
                <p className="text-gray-600">مشتری راضی</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <Factory className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">تولید مدرن</h3>
                <p className="text-gray-600">تجهیزات پیشرفته</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <Clock className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">۲۰ سال</h3>
                <p className="text-gray-600">تجربه در صنعت </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">گواهینامه‌ها و افتخارات</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <Award className="w-12 h-12 text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{cert.title}</h3>
                <p className="text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const certificates = [
  {
    title: 'استاندارد ISO 9001',
    description: 'گواهینامه بین‌المللی مدیریت کیفیت در تولید سنگ‌های ساختمانی'
  },
  {
    title: 'استاندارد ملی ایران',
    description: 'دارای نشان استاندارد از سازمان ملی استاندارد ایران'
  },
  {
    title: 'گواهی صادرات برتر',
    description: 'کسب عنوان صادرکننده برتر سنگ‌های ساختمانی در سال ۱۴۰۱'
  }
];

export default About;