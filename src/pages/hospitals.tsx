const hospitals = [
    {
      id:"1",
      name: "Aga Khan Hosipital",
      about:"Aga Khan University Hospitals in Karachi, Pakistan and Nairobi, Kenya are private, not-for-profit institutions providing high quality health care. The Main Hospitals serve as the principal sites for clinical training for the University's Medical Colleges and Schools of Nursing and Midwifery in Pakistan and East Africa.",
      hospital: "SSJ Skin Clinic",
      image: "https://wpassets.graana.com/blog/wp-content/uploads/2024/07/Agha-Khan-University.jpg.webp",
      reviews:"2.3k",
      rating:"4.1",
      link:"https://hospitals.aku.edu/pakistan/Pages/Request-an-Appointment.aspx",
      contact:"+92 21 111-911-911",
      address:"Stadium Road, P.O. Box 3500 Karac​​​hi 74800, Pakistan",
      map:"Aga Khan University Hospital, Karachi, Pakistan",
      specialities:['Oncology','Neurology','Gastroenterology','Orthopedics','Cardiology'],
      features:['Advanced Diagnostic Services','24/7 Emergency Services', 'Intensive Care Units ICU','Pharmacy','Comprehensive Inpatient and Outpatient Services']
    },
    {
      id:"2",
      name: "Cancer Foundation Hosiptal",
      about:"The Cancer Foundation is a not-for-profit organization registered with the securities and Exchange Commission of Pakistan (Companies Act 1984, Section 42), with the main objective of making cancer treatment available everyone, without any distinction, at an affordable price. It brings together a team of like-minded people, entrepreneurs, business managers and doctors with a unique philosophy to achieve its mission.",
      image: "https://www.hitechlift.pk/manage/images/IMG-5cdfccf54a0561558170869.jpg",
      reviews:"127",
      rating:"4.4",
      link:"https://cfh.org.pk/appointment/",
      contact:"(021) 34991071-3",
      address:"C-130, Block 09, Gulshan-e-Iqbal, Opp Aziz Bhatti Park, Karachi, Pakistan",
      map:"W37V+355, Block 9 Gulshan-e-Iqbal, Karachi, Pakistan",
      specialities:['Medical Oncology','Surgical Oncology','Radiology','Gastroenterology','Plastic Surgery'],
      features:['3D Digital Mammography','Chemotherapy Bays','Endoscopy Suites','Operating Rooms','Outpatient Clinics']
    },
    {
      id:"3",
      name: "Dr Ziauddin Hospital",
      about:"Operating under the Ziauddin Trust, Dr. Ziauddin Group of Hospitals is one of the largest private groups in the country. Its mission has been to reach out to the masses and cater to their needs for quality health care facilities at affordable rates in the country. It began with a small maternity home and has grown exponentially over the years to include five hospitals, including three tertiary-care facilities, responding to the healthcare needs of the people.",
      image: "https://d3313lwq5y3sh2.cloudfront.net/assets/photos/000/303/562/original/Ziauddin_clifton.jpg?1606885416",
      reviews:"542",
      rating:"3.6",
      link:"https://www.ziauddinhospital.com/make-an-appointment/",
      contact:"(021) 111-942-942",
      address:"Block-B, North Nazimabad, Karachi 74700, Pakistan.",
      map:"Allama Rasheed Turabi Rd, Wahid Colony, Karachi, 74700, Pakistan",
      specialities:['Oncology','Cardiology','Neurology','Gastroenterology','Orthopedics'],
      features:['24/7 Emergency Services','Intensive Care Units ICU','Advanced Diagnostic Services','Multiple Campuses Across Karachi','Teaching Hospital Affiliated with Ziauddin University']
    }
    ,
    {
      id:"4",
      name: "Liaquat National Hospital",
      about:"Every day thousands of people enter the gates of Liaquat National Hospital (LNH) seeking medical attention for themselves or their loved ones. With an undying commitment to excellence that meets international standards, regulations and quality systems",
      image: "https://symposium2025.lnh.edu.pk/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-11-at-15.35.14_b7a32ce2.jpg",
      reviews:"1.6k",
      rating:"3.8",
      link:"https://www.lnh.edu.pk/pages/Contact",
      contact:" (021) 111-456-456",
      address:"Stadium Road, Karachi 74800, Pakistan",
      map:"Liaquat National Hospital Rd, Liaquat National Hospital, Karachi, Pakistan",
      specialities:['Oncology','Cardiology','Neurology','Gastroenterology','Orthopedic Surgery'],
      features:['700-Bed Facility','Teaching Hospital','ISO 9001:2000 Certified','Advanced Diagnostic and Therapeutic Services','Advanced Diagnostic and Therapeutic Services']
    }
    ,
    {
      id:"5",
      name: "Memon Medical Institute Hospital",
      about:"Memon Medical Institute Hospital (MMI Hospital) is a tertiary care hospital with state-of-the-art infrastructure that is designed according to the international standards. It is a not for profit, 100% donor funded project that aims to serve the people regardless of their caste, creed, color, religion or ability to pay. The hospital has a covered area of 320, 000 sq. ft, centrally air conditioned with own power generation facility.",
      image: "https://d3313lwq5y3sh2.cloudfront.net/assets/photos/000/162/553/original/Memon_Medical_Complex.jpg?1607427152",
      reviews:"1k",
      rating:"3.6",
      link:"https://mmi.edu.pk/find-a-doctor/",
      contact:"021-111-664-664",
      address:"Hyder Buksh Gabol Road, Safoora Chowrangi, Karachi, Pakistan.",
      map:"Hyder Buksh، Safoora Chowrangi، Gabol Road, Karachi, Pakistan",
      specialities:['Cardiology','Nephrology','Oncology','Gynecology','Pediatrics'],
      features:['State-of-the-Art Infrastructure','24/7 Emergency Services','Intensive Care Units ICU','Diagnostic Laboratories','Pharmacy']
      
    }
    ,
    {
      id:"6",
      name: "Kiran Hospital",
      about:"Although this institute provides specialized consultations and treatment facilities like radiations Oncology, endoscopies and comprehensive laboratory facilities.",
      image: "https://lh5.googleusercontent.com/p/AF1QipOY4FUyZq_M_sZadwOCXGShDpjKz_1Bf28fZ5VC=w260-h175-n-k-no",
      reviews:"230",
      rating:"3.9",
      link:"https://www.kiranhospitals.in/appointment",
      contact:"+92 21 5044037",
      address:"Scheme-33, Safura Chowrangi, Karachi",
      map:"W4WV+VV4 Karachi, Gulzar-e-Hijri Gulzar E Hijri Scheme 33, Karachi, Pakistan",
      specialities:['Radiotherapy','Medical Oncology' ,'Surgical Oncology' ,'Pediatric Oncology' ,'Nuclear Medicine'],
      features:['Advanced Radiotherapy Equipment','Chemotherapy Services','Diagnostic Imaging','Outpatient Clinics','Patient Support Services']
      
    }
    ,
    {
      id:"7",
      name: "Mamji Hospital",
      about:"At Mamji Hospital, Karachi we work hard to make your stay as pleasant as possible by providing you with the highest quality of care and services.",
      image: "https://media.licdn.com/dms/image/v2/D4D1BAQGT-4gSTFOaXQ/company-background_10000/company-background_10000/0/1656049064345/mamji_hospital_official_cover?e=2147483647&v=beta&t=RXCl-dHP-NcfXdfAgjZ7MVydFdedD9auptlzdOq5_BE",
      reviews:"403",
      rating:"3.2",
      link:"https://mamjihospital.com/make-an-appointment/",
      contact:"+92-021-36804777",
      address:"C-19, Block-17, Federal B Area, Near Water Pump Chowrangi, Karachi, Sindh, Pakistan",
      map:"C, 19, near Water Pump Chowrangi, Federal B Area Block 17 Gulberg Town, Karachi, 75950, Pakistan",
      specialities:['Oncology', 'Orthopedics','Gynecology','Pediatrics','Ear, Nose, and Throat (ENT)',],
      features:['24/7 Emergency Services','Intensive Care Unit (ICU)','Operation Theaters','Neonatal Care','Pharmacy']
      
    }
  ];
  export default hospitals;