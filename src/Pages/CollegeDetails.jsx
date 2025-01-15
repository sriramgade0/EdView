import React, { useState } from 'react'; // Correct import for useState
import { useParams, useNavigate } from 'react-router-dom';
import './CollegeDetails.css';
const AuthContext = React.createContext({ isSignedIn: false });

const collegeDetails = {

    1: {
        name: 'Dhanikula Institute of Technology',
        description: 
            'Dhanekula Institute of Technology (DIET) is a prestigious private engineering college situated in Ganguru, near Vijayawada, Andhra Pradesh. Established in 2009, DIET has quickly gained recognition for its commitment to excellence in technical education and research. The institute is affiliated with Jawaharlal Nehru Technological University, Kakinada (JNTUK), ensuring that it adheres to high academic standards and regulatory guidelines set by the state. DIET offers a diverse range of undergraduate programs in engineering fields such as Computer Science, Electronics, Civil, Mechanical, and Electrical Engineering. The curriculum is designed to equip students with theoretical knowledge and practical skills, preparing them for the competitive job market. The institute emphasizes holistic development, focusing on extracurricular activities, technical clubs, and industry partnerships to enhance students learning experiences.',
        history: 
            'The Dhanekula Institute of Engineering and Technology opened in 2009. It was founded by Dhanekula Ravindranadh Tagor.',
        admissions: 
            'The admissions are governed by the rules of the AP State council for Higher Education. Students are admitted based on their results on the Engineering Agricultural and Medical Common Entrance Test to access the undergraduate program.',
        type: 'private',
        AcademicAffiliations: 'Acharya Nagarjuna University, JNTUK',
        Location: 'Ganguru, Andhra Pradesh, India',
        Website: 'diet.ac.in',
        reviews: [
            {
                reviewer: 'Pavan Dronavalli',
                rating: 4.5,
                comment: 'Great faculty and excellent infrastructure. The placements are decent, but the campus life is very vibrant.',
                date: '2024-01-10'
            },
            {
                reviewer: 'Alice Johnson',
                rating: 4.0,
                comment: 'Good college with supportive professors. The curriculum is well-structured, but the hostel facilities could improve.',
                date: '2023-12-05'
            },
            {
                reviewer: 'Ravi Kumar',
                rating: 3.8,
                comment: 'A decent institute for engineering, though industry exposure can be better. Extra-curricular activities are well-managed.',
                date: '2024-02-22'
            }
        ]
    },
    2:{
        name: 'KL University',
        description: 
            'KL University (Koneru Lakshmaiah Education Foundation) is a distinguished private university situated in Vaddeswaram, near Vijayawada, Andhra Pradesh. Founded in 1980 as Koneru Lakshmaiah College of Engineering, it received university status in 2009, reflecting its commitment to high standards of education and research. The university was established by Koneru Lakshmaiah, an esteemed educationist and philanthropist, whose vision was to provide quality education to students from various backgrounds. KL University is renowned for its innovative teaching methodologies and strong emphasis on practical learning. It offers a wide array of undergraduate, postgraduate, and doctoral programs across multiple disciplines, including engineering, management, and humanities. The university’s curriculum is designed to foster critical thinking, creativity, and technical skills, preparing students to excel in their chosen fields. To ensure a fair admission process, KL University conducts its own entrance examination, KLUEEE (KL University Engineering Entrance Examination), while also accepting scores from JEE Main and other state-level exams. Recognized by the University Grants Commission (UGC) and affiliated with the Association of Indian Universities (AIU), KL University strives to maintain high academic standards and continuously enhance its educational offerings to meet the evolving demands of the global job market.',
        history: 
            'KL University was established in 1980 as Koneru Lakshmaiah College of Engineering and was conferred university status in 2009. It was founded by Koneru Lakshmaiah, an educationist and philanthropist.',
        admissions: 
            'The university conducts its own entrance exam, KLUEEE (KL University Engineering Entrance Examination), for admission to its undergraduate engineering programs. Admissions are also based on JEE Main and other state-level exams.',
        type: 'Private',
        AcademicAffiliations: 
            'The university is recognized by the University Grants Commission (UGC) and is a member of the Association of Indian Universities (AIU).',
        Location: 'Vaddeswaram, Andhra Pradesh, India',
        Website: 'www.kluniversity.in',
        reviews: [
            {
                reviewer: 'Priya Sharma',
                rating: 4.7,
                comment: 'Excellent faculty and infrastructure. The campus has a great learning environment with good placement opportunities.',
                date: '2024-02-15'
            },
            {
                reviewer: 'Amit Verma',
                rating: 4.2,
                comment: 'A good university with well-structured courses. The entrance exam process was smooth, but hostel facilities can improve.',
                date: '2023-11-28'
            },
            {
                reviewer: 'Sneha Reddy',
                rating: 3.9,
                comment: 'Good opportunities for extracurricular activities, though some departments need better faculty. Overall, a good experience.',
                date: '2024-03-10'
            }
        ]
    }
,    
    3:{
        name: 'SRK Institute of Technology',
        description: 
            'SRK Institute of Technology is a prominent private engineering college located in Enikepadu, Vijayawada, Andhra Pradesh. Established in 2008, the institution is affiliated with JNTUK (Jawaharlal Nehru Technological University, Kakinada) and aims to provide quality education in various engineering disciplines. The college offers undergraduate programs in Computer Science, Electronics, Electrical, Mechanical, and Civil Engineering, among others. With a focus on innovation and practical learning, SRK Institute is equipped with modern laboratories, experienced faculty, and advanced teaching methodologies. The college also emphasizes the holistic development of students through various extracurricular activities and technical events. SRK Institute of Technology is committed to fostering a conducive learning environment that prepares students to excel in their careers and contribute to the field of technology.',
        history: 
            'SRK Institute of Technology was established in 2008 by a group of educationalists and visionaries who aimed to provide high-quality technical education in the region.',
        admissions: 
            'Admissions to SRK Institute of Technology are based on the ranks obtained in the Engineering Agricultural and Medical Common Entrance Test (EAMCET), conducted by the Andhra Pradesh State Council of Higher Education.',
        type: 'Private',
        AcademicAffiliations: 
            'The institute is affiliated with Jawaharlal Nehru Technological University (JNTUK) and is approved by the All India Council for Technical Education (AICTE).',
        Location: 'Enikepadu, Vijayawada, Andhra Pradesh, India',
        Website: 'srkit.edu.in',
        reviews: [
            {
                reviewer: 'Ramesh Kumar',
                rating: 4.3,
                comment: 'The faculty is very helpful, and the campus has good facilities. Placement opportunities are decent.',
                date: '2023-12-10'
            },
            {
                reviewer: 'Anjali Sharma',
                rating: 4.0,
                comment: 'The infrastructure is well-maintained, and the environment is student-friendly. However, more industry exposure would be beneficial.',
                date: '2024-01-05'
            },
            {
                reviewer: 'Vikram Rao',
                rating: 3.8,
                comment: 'The teaching is good, but the extracurricular activities need more focus. Hostel facilities can be improved.',
                date: '2024-02-18'
            }
        ]
    }
    ,
    4:{
        name: 'Potti Shriramulu Institute of Technology',
        description: 
            'Potti Shriramulu Institute of Technology (PSIT) is a prominent engineering college located in Vijayawada, Andhra Pradesh. Established in 2008, PSIT is affiliated with Jawaharlal Nehru Technological University, Kakinada (JNTUK). The institute aims to provide quality education in engineering and technology, fostering innovation and research among its students. With modern infrastructure, well-equipped laboratories, and experienced faculty, PSIT is committed to nurturing skilled professionals who can excel in their respective fields. The college offers various undergraduate and postgraduate programs, focusing on emerging technologies and industry-relevant skills. In addition to academic excellence, PSIT emphasizes extracurricular activities, encouraging students to participate in cultural and technical events, which help in their overall development. The college also maintains strong industry connections, facilitating internships and placements for its graduates, making it a desirable choice for aspiring engineers.',
        history: 
            'Potti Shriramulu Institute of Technology was founded in 2008 with the goal of providing top-notch engineering education. Named after the renowned social reformer and educationist, Potti Shriramulu, the institute has steadily gained recognition for its commitment to quality and excellence in engineering education. The college is dedicated to nurturing young minds and promoting innovative thinking.',
        admissions: 
            'Admissions to PSIT are conducted through the Andhra Pradesh Engineering Common Entrance Test (AP EAMCET) for undergraduate programs. The selection process is based on the candidate’s performance in the entrance exam and their academic qualifications.',
        type: 'Private',
        AcademicAffiliations: 
            'The institute is affiliated with Jawaharlal Nehru Technological University, Kakinada (JNTUK) and is recognized by the All India Council for Technical Education (AICTE).',
        Location: 'Vijayawada, Andhra Pradesh, India',
        Website: 'pscmr.ac.in',
        reviews: [
            {
                reviewer: 'Manish Reddy',
                rating: 4.2,
                comment: 'The faculty is experienced, and the infrastructure is impressive. Placements are decent, but the placement training could be improved.',
                date: '2024-01-15'
            },
            {
                reviewer: 'Swetha K.',
                rating: 4.5,
                comment: 'The college provides excellent academic support, and extracurricular activities are well organized. The campus environment is very friendly.',
                date: '2024-02-10'
            },
            {
                reviewer: 'Ajay Varma',
                rating: 3.9,
                comment: 'Good college with great potential. However, there is scope for improvement in the hostel facilities and industry exposure.',
                date: '2024-03-05'
            }
        ]
    }
    ,
    5:{
        name: 'RK Engineering College',
        description: 
            'RK Engineering College, located in Vijayawada, Andhra Pradesh, is a prominent institution dedicated to providing quality education in engineering and technology. Established in 2008, it aims to foster an environment of innovation and skill development among its students. The college offers various undergraduate and postgraduate programs across multiple disciplines, including Computer Science, Electronics, and Civil Engineering. With a focus on practical learning and industry collaboration, RK Engineering College prepares its students for successful careers in engineering and related fields. The college boasts modern infrastructure, well-equipped laboratories, and a dedicated faculty with industry experience. Additionally, it encourages research and development activities, providing students with opportunities to engage in projects that address real-world challenges. The campus also hosts various extracurricular activities, ensuring holistic development for its students.',
        history: 
            'RK Engineering College was founded in 2008 with the vision of nurturing skilled engineers capable of contributing to the technological advancements of the nation.',
        admissions: 
            'Admissions are based on the EAMCET entrance examination conducted by the Andhra Pradesh State Council of Higher Education.',
        type: 'Private',
        AcademicAffiliations: 
            'The college is affiliated with Jawaharlal Nehru Technological University (JNTU) Kakinada and is recognized by the University Grants Commission (UGC).',
        Location: 'Vijayawada, Andhra Pradesh, India',
        Website: 'rkce.ac.in',
        reviews: [
            {
                reviewer: 'Priya Sharma',
                rating: 4.0,
                comment: 'The college has a strong academic program with supportive faculty. However, the placement cell needs improvement.',
                date: '2024-01-20'
            },
            {
                reviewer: 'Vikram Reddy',
                rating: 4.3,
                comment: 'Great learning environment with modern labs. The extracurricular activities are engaging and promote overall growth.',
                date: '2024-02-15'
            },
            {
                reviewer: 'Sneha Gupta',
                rating: 3.7,
                comment: 'Decent college, but the hostel facilities could use some upgrades. Academic support is good.',
                date: '2024-03-10'
            }
        ]
    }
    ,
    6:{
        name: 'Siddhartha Engineering College',
        description: 
            'Siddhartha Engineering College, established in 1977, is one of the oldest engineering institutions in Andhra Pradesh, located in Vijayawada. It offers a wide range of undergraduate and postgraduate programs in various engineering fields, including Mechanical, Electrical, and Civil Engineering. The college is known for its commitment to academic excellence and holistic development of students. With a focus on quality education, it has a highly qualified faculty and modern infrastructure, including well-equipped laboratories and libraries. Siddhartha Engineering College emphasizes research, innovation, and industry partnerships, preparing students for the challenges of the engineering profession. The college also promotes extracurricular activities, encouraging students to engage in sports, cultural events, and technical competitions. Its vibrant campus life and supportive environment make it a popular choice among aspiring engineers in the region.',
        history: 
            'Siddhartha Engineering College was founded in 1977 by the Siddhartha Academy of General and Technical Education, aiming to provide quality technical education in the region.',
        admissions: 
            'The college admits students based on their performance in the EAMCET examination and other qualifying exams as per state regulations.',
        type: 'Private',
        AcademicAffiliations: 
            'It is affiliated with Jawaharlal Nehru Technological University (JNTU) Kakinada and recognized by the UGC.',
        Location: 'Vijayawada, Andhra Pradesh, India',
        Website: 'vrsiddhartha.ac.in',
        reviews: [
            {
                reviewer: 'Rahul K.',
                rating: 4.5,
                comment: 'A great college with a strong faculty. The labs are well-equipped and the campus life is vibrant.',
                date: '2024-01-10'
            },
            {
                reviewer: 'Anjali S.',
                rating: 4.0,
                comment: 'Good education quality, but the placement cell needs to be more proactive.',
                date: '2024-02-05'
            },
            {
                reviewer: 'Vishnu P.',
                rating: 3.8,
                comment: 'Decent college, the infrastructure is good but can improve in extracurricular activities.',
                date: '2024-03-15'
            }
        ]
    }
    ,
    7:{
        name: 'Andhra Loyola College',
        description: 
            'Andhra Loyola College, established in 1968, is a prestigious educational institution located in Vijayawada, Andhra Pradesh. Affiliated with Krishna University, the college offers undergraduate and postgraduate courses in engineering, arts, and sciences. Known for its commitment to academic excellence, the college provides a nurturing environment that encourages intellectual growth and character development. It boasts a dedicated faculty with rich academic and industry experience, ensuring that students receive comprehensive education and mentorship. The college also emphasizes research and innovation, with various initiatives to engage students in projects that promote practical learning. Extracurricular activities, including sports, cultural events, and community service, play a significant role in student life, fostering holistic development. The campus is equipped with modern facilities, including libraries, laboratories, and recreational areas, making it an ideal place for aspiring professionals to pursue their education.',
        history: 
            'Founded in 1968 by the Jesuit Society, Andhra Loyola College aims to provide quality higher education with a focus on moral values and holistic development.',
        admissions: 
            'The college conducts admissions based on merit and performance in entrance examinations conducted by the respective universities.',
        type: 'Private',
        AcademicAffiliations: 
            'The college is affiliated with Krishna University and is recognized by the University Grants Commission (UGC).',
        Location: 'Vijayawada, Andhra Pradesh, India',
        Website: 'andhraloyolacollege.ac.in',
        reviews: [
            {
                reviewer: 'Suman R.',
                rating: 4.7,
                comment: 'Excellent faculty and a supportive environment for students. Highly recommend for holistic education.',
                date: '2024-01-12'
            },
            {
                reviewer: 'Rajesh K.',
                rating: 4.0,
                comment: 'The college has good infrastructure but could improve its placement cell.',
                date: '2024-02-20'
            },
            {
                reviewer: 'Pooja M.',
                rating: 4.5,
                comment: 'Great college with a focus on both academics and extracurricular activities. Very engaging campus life.',
                date: '2024-03-05'
            }
        ]
    }
    ,
    8:{
        name: 'VIT-AP University',
        description: 
            'VIT-AP University, part of the VIT Group, is a private university located in Amaravati, Andhra Pradesh. Established in 2017, it aims to provide high-quality education in engineering, management, and sciences. The university features modern infrastructure, advanced laboratories, and a research-oriented curriculum that promotes innovation and practical learning. With a commitment to academic excellence, VIT-AP offers a variety of undergraduate and postgraduate programs, ensuring students are well-prepared for the global job market. The university also emphasizes research and development, encouraging students to participate in projects that address real-world challenges. VIT-AP University’s vibrant campus hosts various cultural and technical events, fostering a sense of community among students. Additionally, strong industry partnerships enable students to gain valuable internships and job opportunities. Overall, VIT-AP University is dedicated to nurturing talent and fostering holistic development among its students.',
        history: 
            'VIT-AP University was established in 2017 as the fourth campus of the VIT Group, expanding its commitment to quality education.',
        admissions: 
            'Admissions are based on the VIT Engineering Entrance Examination (VITEEE) and other qualifying exams for postgraduate programs.',
        type: 'Private',
        AcademicAffiliations: 
            'VIT-AP is recognized by the University Grants Commission (UGC) and is part of the VIT Group, which has received numerous accolades.',
        Location: 'Amaravati, Andhra Pradesh, India',
        Website: 'vitap.ac.in',
        reviews: [
            {
                reviewer: 'Anjali S.',
                rating: 4.8,
                comment: 'Excellent faculty and state-of-the-art facilities. A great place for students who want to excel in their studies.',
                date: '2024-01-15'
            },
            {
                reviewer: 'Karan P.',
                rating: 4.2,
                comment: 'Good university with strong industry connections. The placement opportunities are impressive.',
                date: '2024-02-10'
            },
            {
                reviewer: 'Sreeja M.',
                rating: 4.5,
                comment: 'Vibrant campus life with plenty of extracurricular activities. Overall a rewarding experience.',
                date: '2024-03-03'
            }
        ]
    }
    
    ,
    9:{
        name: 'SRM AP University',
        description: 
            'SRM AP University is a premier private institution located in Amaravati, Andhra Pradesh. Established in 2017, it is part of the SRM Group of Institutions, known for its commitment to excellence in education. The university offers a wide range of undergraduate and postgraduate programs across various disciplines, including engineering, management, and liberal arts. SRM AP focuses on a student-centric approach, providing state-of-the-art infrastructure and a dynamic learning environment. The curriculum is designed to foster creativity and critical thinking, equipping students with the skills needed for the global workforce. SRM AP University emphasizes research and innovation, encouraging students to participate in projects that contribute to societal needs. The campus hosts various events, workshops, and seminars, enhancing the overall educational experience. With a diverse student body and experienced faculty, SRM AP University is dedicated to nurturing future leaders and change-makers.',
        history: 
            'SRM AP University was established in 2017, expanding the SRM Group’s presence and commitment to quality education in Andhra Pradesh.',
        admissions: 
            'The university conducts the SRMJEE (SRM Joint Entrance Examination) for undergraduate admissions and other criteria for postgraduate programs.',
        type: 'Private',
        academicAffiliations: 
            'SRM AP is recognized by the University Grants Commission (UGC) and is part of the SRM Group, which is renowned for its academic excellence.',
        location: 'Amaravati, Andhra Pradesh, India',
        website: 'srmap.edu.in',
        reviews: [
            {
                reviewer: 'Meera N.',
                rating: 4.7,
                comment: 'Great university with excellent facilities and a supportive faculty. Highly recommend!',
                date: '2024-01-12'
            },
            {
                reviewer: 'Rajesh K.',
                rating: 4.5,
                comment: 'The campus is beautiful and promotes a good learning environment. Admissions process is smooth.',
                date: '2024-02-08'
            },
            {
                reviewer: 'Sanya L.',
                rating: 4.3,
                comment: 'Good focus on research and innovation. There are many opportunities for internships and projects.',
                date: '2024-03-15'
            }
        ]
    }
    
    ,
    10:{
        name: 'Amrita University',
        description: 
            'Amrita University, officially known as Amrita Vishwa Vidyapeetham, has a campus in Amaravati, Andhra Pradesh. Founded in 2003, the university is renowned for its holistic education approach, integrating academic rigor with ethical values. The Amaravati campus offers various undergraduate and postgraduate programs in engineering, management, and arts, fostering an environment of innovation and research. Amrita University emphasizes interdisciplinary learning, encouraging students to engage in projects that have societal relevance. The institution boasts modern facilities, including advanced laboratories, libraries, and research centers, providing students with ample resources for their academic pursuits. The university is committed to social outreach, inspiring students to participate in community service initiatives. With a strong focus on global exposure, Amrita University collaborates with various international institutions, enriching the learning experience and preparing students for global challenges. Overall, it strives to cultivate well-rounded individuals who can contribute positively to society.',
        history: 
            'Amrita University was established in 2003 and has expanded to several campuses across India, including its Amaravati campus in Andhra Pradesh.',
        admissions: 
            'The university conducts the AEEE (Amrita Engineering Entrance Examination) for undergraduate admissions and evaluates various criteria for postgraduate programs.',
        type: 'Private',
        AcademicAffiliations: 
            'Amrita University is recognized by the University Grants Commission (UGC) and is accredited by the National Board of Accreditation (NBA).',
        Location: 'Amaravati, Andhra Pradesh, India',
        Website: 'www.amrita.edu',
        reviews: [
            {
                reviewer: 'Anita R.',
                rating: 4.8,
                comment: 'Excellent faculty and a vibrant campus life. The emphasis on ethical values sets it apart!',
                date: '2024-01-20'
            },
            {
                reviewer: 'Ravi S.',
                rating: 4.6,
                comment: 'The interdisciplinary approach helps in developing a well-rounded skill set. Great facilities too!',
                date: '2024-02-15'
            },
            {
                reviewer: 'Lakshmi P.',
                rating: 4.4,
                comment: 'A wonderful university that encourages social outreach. The community service initiatives are inspiring.',
                date: '2024-03-05'
            }
        ]
    }
    

    
    ,
    11:{
        name: 'Sibar Institute of Dental Sciences',
        description: 'Sibar Institute of Dental Sciences, established in 2008, is a leading private dental college located in Guntur, Andhra Pradesh. The institute is affiliated with NTR University of Health Sciences and is recognized for its commitment to providing high-quality dental education and training. Sibar offers a Bachelor of Dental Surgery (BDS) program and various postgraduate courses in dentistry, focusing on comprehensive clinical training and research. The college features state-of-the-art facilities, including modern laboratories, simulation centers, and a fully equipped dental hospital that provides a wide range of dental services to the community. Sibar emphasizes hands-on experience and patient interaction, ensuring that students are well-prepared for their professional careers. The institute also engages in community outreach programs to promote oral health awareness and provides students with opportunities to participate in various dental camps and workshops, enhancing their practical skills and knowledge.',
        history: 'Sibar Institute of Dental Sciences was founded in 2008 by Dr. B. Ravi Kumar, with a vision to provide quality dental education and enhance oral healthcare in the region.',
        admissions: 'Admissions to the BDS program are based on the results of the NEET (National Eligibility cum Entrance Test), as well as other criteria set by the university.',
        type: 'Private',
        AcademicAffiliations: 'Sibar is affiliated with NTR University of Health Sciences and recognized by the Dental Council of India (DCI).',
        Location: 'Guntur, Andhra Pradesh, India',
        Website: 'sids.ac.in',
        reviews: [
            {
                reviewer: 'Priya M.',
                rating: 4.5,
                comment: 'The faculty is very supportive and knowledgeable. The hands-on training is excellent.',
                date: '2024-02-01'
            },
            {
                reviewer: 'Rohit K.',
                rating: 4.3,
                comment: 'Great facilities and a good learning environment. The dental hospital is a valuable resource.',
                date: '2024-03-10'
            },
            {
                reviewer: 'Sonia T.',
                rating: 4.6,
                comment: 'I appreciated the community service initiatives. It enhances learning and benefits the community.',
                date: '2024-03-15'
            }
        ]
    }
,    
    12:{
        name: 'Paramedical and Allied Sciences',
        description: 'The Paramedical and Allied Sciences field focuses on providing essential support services in healthcare. This includes a variety of professions such as physiotherapy, radiology, nursing, and laboratory technology. Institutions offering courses in this field prepare students with the necessary skills and knowledge to assist healthcare professionals in delivering quality care. The curriculum typically includes both theoretical and practical components, ensuring that graduates are well-equipped to handle real-world medical challenges. With a growing demand for healthcare services, professionals in paramedical and allied sciences play a crucial role in patient care, diagnostics, and rehabilitation. Many colleges also emphasize internships and hands-on training, enhancing students’ employability in a competitive job market. As healthcare evolves, this field continues to expand, creating opportunities for specialized training and career advancement.',
        history: 'The paramedical field has evolved significantly over the past few decades, with formal training programs being introduced to meet the increasing demand for healthcare services.',
        admissions: 'Admission processes may vary by institution but often require completion of 10+2 with science subjects and may include entrance examinations or interviews.',
        type: 'Private',
        AcademicAffiliations: 'Programs are often affiliated with recognized universities and healthcare organizations to ensure quality education and training.',
        Location: 'Vijayawada, Andhra Pradesh, India',
        Website: 'drntr.uhsap.in', // Placeholder link
        reviews: [
            {
                reviewer: 'Nikhil J.',
                rating: 4.5,
                comment: 'The program offers a great balance of theory and practical experience. Highly recommended for aspiring healthcare professionals.',
                date: '2024-01-10'
            },
            {
                reviewer: 'Sneha R.',
                rating: 4.3,
                comment: 'I had a wonderful experience with knowledgeable instructors and state-of-the-art facilities.',
                date: '2024-02-05'
            },
            {
                reviewer: 'Arjun P.',
                rating: 4.6,
                comment: 'The internships provided valuable real-world experience, making me feel well-prepared for my career.',
                date: '2024-03-12'
            }
        ]
    }
    ,
    13:{
        name: 'Apollo Medical College',
        description: 'Apollo Medical College, part of the renowned Apollo Hospitals Group, is dedicated to providing quality medical education and training. Located in Vijayawada, Andhra Pradesh, the college offers a range of undergraduate and postgraduate courses in medicine and allied health sciences. Established with the aim of producing competent healthcare professionals, Apollo Medical College emphasizes a curriculum that blends theoretical knowledge with practical experience. The college is equipped with modern facilities, including advanced laboratories and a teaching hospital, which provides students with invaluable hands-on training. Faculty members are experienced professionals who bring a wealth of knowledge to the classroom. The college also promotes research and innovation, encouraging students to participate in projects that address current healthcare challenges. With its commitment to excellence, Apollo Medical College is a prominent choice for aspiring healthcare professionals.',
        history: 'Apollo Medical College was established to enhance medical education and training, leveraging the expertise of the Apollo Hospitals network.',
        admissions: 'The college conducts its own entrance exams and also accepts scores from national medical entrance tests for undergraduate admissions.',
        type: 'Private',
        AcademicAffiliations: 'Apollo Medical College is recognized by the Medical Council of India (MCI) and affiliated with reputable universities.',
        Location: 'Vijayawada, Andhra Pradesh, India',
        Website: 'apollo.edu.in', // Placeholder link
        reviews: [
            {
                reviewer: 'Dr. Priyanka M.',
                rating: 4.7,
                comment: 'The college provides excellent clinical exposure. The faculty is very supportive and knowledgeable.',
                date: '2024-01-15'
            },
            {
                reviewer: 'Rajesh K.',
                rating: 4.5,
                comment: 'A great institution for aspiring doctors. The facilities and infrastructure are top-notch.',
                date: '2024-02-20'
            },
            {
                reviewer: 'Suman T.',
                rating: 4.6,
                comment: 'I appreciate the emphasis on research. It prepares students well for future challenges in healthcare.',
                date: '2024-03-05'
            }
        ]
    }
    ,
    14:{
        name: 'SV Institute of Medical Sciences',
        description: 'SV Institute of Medical Sciences is a leading medical college located in Vijayawada, Andhra Pradesh. Established with the mission to provide high-quality medical education, the institute offers a variety of undergraduate and postgraduate programs in medicine and healthcare. The curriculum is designed to meet national standards, incorporating the latest medical advancements and technologies. The college boasts a well-equipped hospital for clinical training, allowing students to gain practical experience under the supervision of experienced faculty. SV Institute focuses on holistic development, emphasizing both academic and extracurricular activities to foster well-rounded professionals. Additionally, the institute promotes research initiatives, encouraging students to contribute to the medical field through innovative projects. With a strong commitment to healthcare excellence, SV Institute of Medical Sciences continues to attract aspiring medical professionals from across the region.',
        history: 'The institute was founded to address the growing demand for quality medical education and to contribute to the healthcare sector in India.',
        admissions: 'The admission process includes entrance exams and assessment of academic qualifications in science subjects.',
        type: 'Private',
        AcademicAffiliations: 'Recognized by the Medical Council of India (MCI) and affiliated with leading universities.',
        Location: 'Vijayawada, Andhra Pradesh, India',
        Website: 'svvu.edu.in', // Placeholder link
        reviews: [
            {
                reviewer: 'Ravi G.',
                rating: 4.6,
                comment: 'The faculty is knowledgeable and approachable. The hands-on training is invaluable!',
                date: '2024-01-30'
            },
            {
                reviewer: 'Sanjay M.',
                rating: 4.5,
                comment: 'Excellent facilities and a supportive environment for students. Highly recommend it.',
                date: '2024-02-15'
            },
            {
                reviewer: 'Anjali D.',
                rating: 4.7,
                comment: 'I appreciate the focus on research and innovation. It makes learning engaging and relevant.',
                date: '2024-03-10'
            }
        ]
    }
    ,
    15:{
        name: 'Sri Gosalites Medical College',
        description: 'Sri Gosalites Medical College is a prominent institution for medical education located in Vijayawada, Andhra Pradesh. The college aims to nurture future healthcare professionals through a comprehensive curriculum that combines theoretical knowledge with practical application. Students are trained in various medical disciplines, including surgery, pediatrics, and internal medicine. The college features state-of-the-art facilities, including well-equipped laboratories and a teaching hospital, ensuring students receive quality clinical training. Faculty members consist of experienced doctors and educators committed to providing guidance and mentorship. Sri Gosalites Medical College also emphasizes the importance of research, encouraging students to engage in projects that contribute to medical science. With a focus on ethical practice and patient care, the college prepares its graduates to meet the challenges of the healthcare industry effectively.',
        history: 'Established to improve the standards of medical education in the region, Sri Gosalites Medical College has quickly become a respected institution.',
        admissions: 'Students are admitted based on entrance examination scores and academic qualifications in science subjects.',
        type: 'Private',
        AcademicAffiliations: 'Recognized by the Medical Council of India (MCI) and affiliated with established universities.',
        Location: 'Vijayawada, Andhra Pradesh, India',
        Website: 'gosalites.com', // Placeholder link
        reviews: [
            {
                reviewer: 'Meera S.',
                rating: 4.6,
                comment: 'The teaching staff is very dedicated, and the clinical exposure is excellent.',
                date: '2024-01-25'
            },
            {
                reviewer: 'Rohan P.',
                rating: 4.5,
                comment: 'A great college for aspiring doctors. The facilities are modern and well-maintained.',
                date: '2024-02-18'
            },
            {
                reviewer: 'Sita R.',
                rating: 4.7,
                comment: 'I appreciate the focus on research projects. It enhances learning and prepares us for real-world challenges.',
                date: '2024-03-12'
            }
        ]
    }
    ,
    16:{
        name: 'Nimra Institute of Medical Sciences',
        description: 'Nimra Institute of Medical Sciences is an esteemed medical college located in Vijayawada, Andhra Pradesh, offering a variety of undergraduate and postgraduate programs in medical and allied health fields. The institute focuses on providing high-quality education through an innovative curriculum that incorporates the latest advancements in medical science. Students benefit from hands-on training in a well-equipped teaching hospital that serves the community. Nimra Institute emphasizes research and encourages students to participate in studies that address real-world health issues. The faculty comprises experienced medical professionals dedicated to nurturing the next generation of healthcare leaders. With a commitment to ethical practice and patient-centered care, Nimra Institute of Medical Sciences strives to prepare its students for successful careers in healthcare.',
        history: 'Founded with the goal of improving healthcare education in the region, Nimra Institute has established itself as a key player in medical training.',
        admissions: 'The institute conducts its own entrance exams and also considers scores from national medical entrance tests.',
        type: 'Private',
        AcademicAffiliations: 'Recognized by the Medical Council of India (MCI) and affiliated with reputable universities.',
        Location: 'Vijayawada, Andhra Pradesh, India',
        Website: 'nims.in', // Placeholder link
        reviews: [
            {
                reviewer: 'Vikram S.',
                rating: 4.5,
                comment: 'The curriculum is well-structured, and the faculty is very supportive.',
                date: '2024-01-18'
            },
            {
                reviewer: 'Priya K.',
                rating: 4.6,
                comment: 'Great practical exposure with modern facilities. Highly recommend!',
                date: '2024-02-22'
            },
            {
                reviewer: 'Anil T.',
                rating: 4.4,
                comment: 'The focus on research is impressive, making the learning experience more engaging.',
                date: '2024-03-15'
            }
        ]
    }
    ,
    17:{
        name: 'Karthikeya Medical College',
        description: 'Karthikeya Medical College is a well-known institution for medical education located in Vijayawada, Andhra Pradesh. The college is dedicated to producing skilled healthcare professionals through a comprehensive curriculum that integrates theoretical knowledge and clinical practice. Offering undergraduate and postgraduate programs in medicine and allied health, Karthikeya Medical College emphasizes hands-on training in its attached teaching hospital, providing students with valuable experience. The faculty consists of qualified medical professionals who are committed to mentoring students and fostering a supportive learning environment. Additionally, the college encourages research and community service, helping students understand the importance of healthcare beyond the classroom. With a focus on holistic development and patient care, Karthikeya Medical College is committed to excellence in medical education.',
        history: 'Karthikeya Medical College was established to fulfill the growing need for quality medical education and training in the region.',
        admissions: 'Admission criteria include entrance exam scores and academic qualifications in relevant science subjects.',
        type: 'Private',
        AcademicAffiliations: 'Recognized by the Medical Council of India (MCI) and affiliated with leading educational institutions.',
        Location: 'Vijayawada, Andhra Pradesh, India',
        Website: 'drntr.uhsap.in', // Placeholder link
        reviews: [
            {
                reviewer: 'Sunita R.',
                rating: 4.7,
                comment: 'The faculty is very knowledgeable and supportive. I feel well-prepared for my career.',
                date: '2024-01-25'
            },
            {
                reviewer: 'Ajay M.',
                rating: 4.5,
                comment: 'Great infrastructure and facilities. The hands-on training has been invaluable.',
                date: '2024-02-18'
            },
            {
                reviewer: 'Neha T.',
                rating: 4.6,
                comment: 'The emphasis on community service is commendable, making the learning experience well-rounded.',
                date: '2024-03-10'
            }
        ]
    }
    ,
    18:{
        name: 'Vikas Pharmacy College',
        description: 'Vikas Pharmacy College is a prominent institution located in Vijayawada, Andhra Pradesh, specializing in pharmaceutical education and research. Established to provide quality education in pharmacy, the college offers undergraduate and postgraduate programs that cover various aspects of pharmacy practice and research. The curriculum is designed to integrate theoretical knowledge with practical experience, ensuring that students are well-prepared for careers in the pharmaceutical industry, clinical settings, and research laboratories. Vikas Pharmacy College is equipped with modern laboratories and facilities that support innovative learning. Faculty members are experienced professionals dedicated to student success, fostering a collaborative and dynamic learning environment. The college also encourages participation in research and community service, helping students understand the broader impact of pharmacy on healthcare. With a commitment to excellence, Vikas Pharmacy College aims to develop competent and ethical pharmacy professionals.',
        history: 'Founded with a vision to enhance pharmaceutical education in the region, Vikas Pharmacy College has established a reputation for excellence.',
        admissions: 'Admission processes typically include entrance exams and assessment of academic qualifications in science subjects.',
        type: 'Private',
        AcademicAffiliations: 'Recognized by the Pharmacy Council of India (PCI) and affiliated with reputable universities.',
        Location: 'Vijayawada, Andhra Pradesh, India',
        Website: 'vikascps.com', // Placeholder link
        reviews: [
            {
                reviewer: 'Rahul K.',
                rating: 4.6,
                comment: 'Excellent faculty and great infrastructure! The practical sessions are very helpful.',
                date: '2024-02-05'
            },
            {
                reviewer: 'Priya S.',
                rating: 4.5,
                comment: 'The college promotes research and has a supportive environment for students.',
                date: '2024-03-12'
            },
            {
                reviewer: 'Anil J.',
                rating: 4.8,
                comment: 'A great place to study pharmacy! I appreciate the focus on ethical practices.',
                date: '2024-04-08'
            }
        ]
    }
    ,
    19:{
        name: 'Sapthagiri Medical College',
        description: 'Sapthagiri Medical College is a well-established medical institution located in Vijayawada, Andhra Pradesh, offering a range of undergraduate and postgraduate programs in medicine and healthcare. The college is committed to providing high-quality medical education through a comprehensive curriculum that combines classroom learning with practical experience. Students have access to a modern teaching hospital that serves as a training ground for clinical skills development. Sapthagiri Medical College emphasizes research and encourages students to engage in projects that contribute to the advancement of medical science. The faculty comprises experienced healthcare professionals dedicated to guiding students throughout their academic journey. With a focus on ethical practices and patient care, the college prepares its graduates to excel in various healthcare settings.',
        history: 'Established to enhance medical education in the region, Sapthagiri Medical College has quickly become a respected institution for aspiring healthcare professionals.',
        admissions: 'The college conducts entrance examinations and considers academic qualifications for admissions.',
        type: 'Private',
        AcademicAffiliations: 'Recognized by the Medical Council of India (MCI) and affiliated with established universities.',
        Location: 'Vijayawada, Andhra Pradesh, India',
        Website: 'simsrc.edu.in', // Placeholder link
        reviews: [
            {
                reviewer: 'Vikram T.',
                rating: 4.7,
                comment: 'Great faculty and excellent clinical exposure! The training hospital is top-notch.',
                date: '2024-01-15'
            },
            {
                reviewer: 'Sneha M.',
                rating: 4.5,
                comment: 'A wonderful environment for learning. Supportive faculty and good facilities.',
                date: '2024-02-20'
            },
            {
                reviewer: 'Rohan P.',
                rating: 4.6,
                comment: 'Very happy with my experience here. The focus on research is commendable.',
                date: '2024-03-30'
            }
        ]
    }
    ,
    20:{
        name: 'Ramaiah Medical College',
        description: 'Ramaiah Medical College is a renowned medical institution located in Vijayawada, Andhra Pradesh. It offers comprehensive programs in medicine and healthcare, aimed at preparing students for successful careers in the medical field. The college is equipped with modern facilities, including advanced laboratories and a teaching hospital that provides students with hands-on clinical experience. Ramaiah Medical College focuses on a holistic education approach, integrating academic excellence with ethical practices and community service. The faculty comprises skilled professionals committed to nurturing future healthcare leaders. The college also promotes research initiatives, encouraging students to participate in projects that address real-world health challenges. With its commitment to quality education and student development, Ramaiah Medical College has become a sought-after choice for aspiring medical professionals.',
        history: 'Founded to improve the quality of medical education in the region, Ramaiah Medical College has established a strong reputation over the years.',
        admissions: 'Admission criteria typically include entrance examination scores and assessment of academic qualifications in relevant science subjects.',
        type: 'Private',
        AcademicAffiliations: 'Recognized by the Medical Council of India (MCI) and affiliated with prominent universities.',
        Location: 'Vijayawada, Andhra Pradesh, India',
        Website: 'msrmc.ac.in', // Placeholder link
        reviews: [
            {
                reviewer: 'Nisha S.',
                rating: 4.8,
                comment: 'Excellent college with a strong focus on practical skills and ethics. Highly recommend!',
                date: '2024-01-10'
            },
            {
                reviewer: 'Rajesh K.',
                rating: 4.5,
                comment: 'The faculty is very supportive, and the facilities are modern. Great learning environment.',
                date: '2024-02-18'
            },
            {
                reviewer: 'Priya L.',
                rating: 4.6,
                comment: 'I appreciate the emphasis on research. It’s a great place to grow as a medical professional.',
                date: '2024-03-28'
            }
        ]
    }
    ,
    21:{
        name: 'Sri Vijaya Vidyalaya College of Arts and Science',
        description: 'Sri Vijaya Vidyalaya College of Arts and Science is a well-established institution located in Vijayawada, Andhra Pradesh. The college is committed to providing quality education in various disciplines including arts, sciences, and commerce. Known for its experienced faculty and student-centric approach, the college fosters an environment conducive to academic excellence and overall development. With a focus on holistic education, it offers undergraduate programs aimed at preparing students for both higher studies and professional careers.',
        history: 'Established in the early 1990s, the college has grown significantly in terms of infrastructure, academic programs, and student enrollment over the years.',
        admissions: 'Admissions are based on merit in the qualifying examinations, following the guidelines of the Andhra Pradesh State Higher Education Board.',
        type: 'Private',
        AcademicAffiliations: 'Affiliated to Krishna University, Andhra Pradesh.',
        Location: 'Vijayawada, Andhra Pradesh, India',
        Website: 'svvcas.com',
        reviews: [
            {
                reviewer: 'Sneha R.',
                rating: 4.2,
                comment: 'Great college with dedicated faculty. The environment is very supportive for learning.',
                date: '2024-01-12'
            },
            {
                reviewer: 'Vikram T.',
                rating: 4.5,
                comment: 'Excellent programs in arts and sciences. The college has improved a lot over the years!',
                date: '2024-02-22'
            },
            {
                reviewer: 'Priyanka M.',
                rating: 4.0,
                comment: 'A good choice for undergraduate studies. The faculty is knowledgeable and approachable.',
                date: '2024-03-15'
            }
        ]
    }
    ,
    22:{
        name: 'VHS College of Arts & Sciences',
        description: 'VHS College of Arts & Sciences offers a wide range of undergraduate programs in arts, science, and management. Known for its quality faculty and focus on practical education, the college encourages students to engage in internships and hands-on learning experiences. It also offers cultural activities and student clubs to enhance overall development.',
        history: 'Established in the mid-1980s, the college has become a preferred destination for students seeking quality education in arts and sciences.',
        admissions: 'Admissions are primarily based on academic performance, with quotas reserved for underprivileged communities as per government norms.',
        type: 'Private',
        AcademicAffiliations: 'Affiliated with Acharya Nagarjuna University.',
        Location: 'Vijayawada, Andhra Pradesh, India',
        Website: 'Not available',
        reviews: [
            {
                reviewer: 'Aditi K.',
                rating: 4.0,
                comment: 'The faculty is very supportive, and the college offers a good balance of academics and extracurricular activities.',
                date: '2024-01-10'
            },
            {
                reviewer: 'Rohit P.',
                rating: 4.3,
                comment: 'Great college for pursuing arts and sciences! The hands-on approach to learning is very beneficial.',
                date: '2024-02-15'
            },
            {
                reviewer: 'Meera S.',
                rating: 3.8,
                comment: 'Good infrastructure and experienced faculty, but there is room for improvement in placements.',
                date: '2024-03-05'
            }
        ]
    }
    ,
    23:{
        name: 'Gandhiji Women’s Degree College',
        description: 'Gandhiji Women’s Degree College is a premier institution in Vijayawada, Andhra Pradesh, dedicated to empowering women through education. The college offers undergraduate programs in arts, sciences, and commerce, focusing on both academic and personal development. With experienced faculty and well-equipped facilities, Gandhiji Women’s Degree College provides a nurturing environment where female students can excel in their studies and prepare for future challenges in the workforce or higher education.',
        history: 'The college was established with the goal of promoting women’s education and has since grown to become a respected institution in the region.',
        admissions: 'Admission is based on merit, with a focus on providing opportunities to female students from diverse backgrounds.',
        type: 'Private',
        AcademicAffiliations: 'Affiliated to Krishna University, Andhra Pradesh.',
        Location: 'Vijayawada, Andhra Pradesh, India',
        Website: 'gandhijimahilakalasala.com',
        reviews: [
            {
                reviewer: 'Sneha R.',
                rating: 4.5,
                comment: 'A great college for women! The faculty is supportive and encourages students to excel.',
                date: '2024-01-20'
            },
            {
                reviewer: 'Priya M.',
                rating: 4.2,
                comment: 'The college environment is very empowering. I’ve learned a lot and made lifelong friends.',
                date: '2024-02-10'
            },
            {
                reviewer: 'Anjali T.',
                rating: 4.0,
                comment: 'Facilities are good, but I wish there were more extracurricular activities offered.',
                date: '2024-03-12'
            }
        ]
    }
    ,
    24:{
        name: 'Krishnaveni Degree College',
        description: 'Krishnaveni Degree College offers undergraduate programs in commerce, science, and arts. The college is known for its student-centric approach and vibrant learning environment. With a focus on both academic and extracurricular activities, it prepares students to face professional challenges with confidence.',
        history: 'Established in the early 2000s, the college has grown to become a popular choice among students in the region.',
        admissions: 'The college admits students based on academic merit, following the regulations of the state education board.',
        type: 'Private',
        AcademicAffiliations: 'Affiliated with Krishna University.',
        Location: 'Vijayawada, Andhra Pradesh, India',
        Website: 'kvdcnrt.com',
        reviews: [
            {
                reviewer: 'Ravi K.',
                rating: 4.3,
                comment: 'Great college with a supportive environment! The faculty really cares about students.',
                date: '2024-02-15'
            },
            {
                reviewer: 'Meena S.',
                rating: 4.0,
                comment: 'The college offers good courses and has decent facilities. I enjoyed my time here.',
                date: '2024-03-05'
            },
            {
                reviewer: 'Suresh P.',
                rating: 4.1,
                comment: 'Extracurricular activities are a highlight, and the college encourages student participation.',
                date: '2024-01-28'
            }
        ]
    }
    ,
    25:{
        name: 'Andhra Loyola Degree College',
        description: 'Andhra Loyola Degree College is one of the most prestigious institutions in Vijayawada, Andhra Pradesh. Known for its academic rigor and excellent faculty, the college offers a variety of undergraduate programs in arts, science, and commerce. The institution places a strong emphasis on values-based education, in line with its Jesuit principles. Andhra Loyola College is renowned for its vibrant campus life, student engagement in community services, and a strong focus on research and innovation. The college has a reputation for producing well-rounded graduates who excel both academically and personally.',
        history: 'Established in 1954 by the Society of Jesus (Jesuits), the college has a long history of excellence in higher education.',
        admissions: 'Admission is granted based on academic merit and performance in entrance exams, where applicable.',
        type: 'Private',
        AcademicAffiliations: 'Affiliated to Krishna University, Andhra Pradesh.',
        Location: 'Vijayawada, Andhra Pradesh, India',
        Website: 'andhraloyolacollege.ac.in',
        reviews: [
            {
                reviewer: 'Anjali M.',
                rating: 4.7,
                comment: 'The faculty is exceptional, and the campus atmosphere is very supportive. I loved my experience here!',
                date: '2024-03-12'
            },
            {
                reviewer: 'Rohan S.',
                rating: 4.5,
                comment: 'A great place for holistic development. The college encourages participation in various activities.',
                date: '2024-02-22'
            },
            {
                reviewer: 'Sita R.',
                rating: 4.8,
                comment: 'Strong emphasis on values and ethics in education. I feel well-prepared for my future career.',
                date: '2024-01-30'
            }
        ]
    }
    ,
    26:{
        name: 'Gowtham Degree College',
        description: 'Gowtham Degree College offers undergraduate programs with a focus on practical learning and career development. Known for its academic rigor and industry-oriented approach, the college provides a supportive learning environment through experienced faculty and modern infrastructure.',
        history: 'Established in the early 2000s, the college has built a reputation for delivering high-quality education.',
        admissions: 'Admission is based on academic merit, with provisions for reserved categories.',
        type: 'Private',
        AcademicAffiliations: 'Affiliated with Krishna University.',
        Location: 'Vijayawada, Andhra Pradesh, India',
        Website: 'gowthamdegree.in',
        reviews: [
            {
                reviewer: 'Rahul K.',
                rating: 4.4,
                comment: 'Great college for practical learning and skill development. The faculty is very helpful.',
                date: '2024-03-15'
            },
            {
                reviewer: 'Pooja D.',
                rating: 4.6,
                comment: 'The infrastructure is modern and well-maintained. I had a wonderful experience studying here.',
                date: '2024-02-28'
            },
            {
                reviewer: 'Vijay T.',
                rating: 4.5,
                comment: 'Strong emphasis on career development. Many industry connections for internships.',
                date: '2024-01-18'
            }
        ]
    }
    ,
    27:{
        name: 'Government Degree College',
        description: 'Government Degree College, Vijayawada, is a public institution providing affordable and accessible higher education to students in the region. The college offers undergraduate courses in arts, science, and commerce. Known for its experienced faculty and focus on academic rigor, Government Degree College provides a solid foundation for students aiming for further studies or professional careers. The college is supported by state resources, ensuring students have access to necessary academic tools and infrastructure.',
        history: 'Established by the Andhra Pradesh government to cater to the educational needs of local students, the college has played a crucial role in higher education for several decades.',
        admissions: 'Admissions are based on merit in the qualifying exams and follow the guidelines of the Andhra Pradesh Higher Education Board.',
        type: 'Government',
        AcademicAffiliations: 'Affiliated to Krishna University, Andhra Pradesh.',
        Location: 'Vijayawada, Andhra Pradesh, India',
        Website: 'srrcvr.ac.in',
        reviews: [
            {
                reviewer: 'Anil S.',
                rating: 4.0,
                comment: 'A good college with dedicated faculty. The courses are well-structured.',
                date: '2024-03-10'
            },
            {
                reviewer: 'Sneha P.',
                rating: 3.8,
                comment: 'The infrastructure could be improved, but overall a decent place for studies.',
                date: '2024-02-22'
            },
            {
                reviewer: 'Raj K.',
                rating: 4.2,
                comment: 'Offers a variety of courses and has a supportive learning environment.',
                date: '2024-01-05'
            }
        ]
    }
    ,
    28:{
        name: 'Nalanda Degree College',
        description: 'Nalanda Degree College is a private institution in Vijayawada, Andhra Pradesh, offering undergraduate programs in arts, science, and commerce. The college is dedicated to providing quality education with a focus on career-oriented learning. Nalanda Degree College emphasizes academic excellence, with a faculty dedicated to ensuring students reach their full potential. The institution also encourages participation in extracurricular activities and skill-development programs to ensure holistic growth for its students.',
        history: 'Nalanda Degree College was founded to provide comprehensive education to students in the region, aiming for academic excellence and personal development.',
        admissions: 'Admission is based on merit, with candidates being selected according to their performance in the qualifying examinations.',
        type: 'Private',
        AcademicAffiliations: 'Affiliated to Krishna University, Andhra Pradesh.',
        Location: 'Vijayawada, Andhra Pradesh, India',
        Website: 'ndc.edu.in',
        reviews: [
            {
                reviewer: 'Meera L.',
                rating: 4.5,
                comment: 'Excellent faculty and a supportive learning environment. Highly recommend!',
                date: '2024-04-15'
            },
            {
                reviewer: 'Rahul T.',
                rating: 3.9,
                comment: 'Good college with decent infrastructure. Could improve on library resources.',
                date: '2024-02-10'
            },
            {
                reviewer: 'Simran J.',
                rating: 4.0,
                comment: 'Focus on extracurricular activities is a big plus. I enjoyed my time here.',
                date: '2024-01-20'
            }
        ]
    }
    ,
    29:{
        name: 'Siddhartha College of Arts and Sciences',
        description: 'Siddhartha College of Arts and Sciences is a well-known institution in Vijayawada, offering diverse programs in arts, science, and commerce. The college promotes academic excellence through a mix of theory and practical education.',
        history: 'Established in 1975, the college is part of the Siddhartha Academy group.',
        admissions: 'Admissions are based on academic merit.',
        type: 'Private',
        AcademicAffiliations: 'Affiliated with Krishna University.',
        Location: 'Vijayawada, Andhra Pradesh, India',
        Website: 'pbsiddhartha.ac.in',
        reviews: [
            {
                reviewer: 'Anil P.',
                rating: 4.2,
                comment: 'Great faculty and a vibrant campus life. I loved my experience here!',
                date: '2024-05-02'
            },
            {
                reviewer: 'Priya K.',
                rating: 4.0,
                comment: 'Good programs but could use more extracurricular activities.',
                date: '2024-03-18'
            },
            {
                reviewer: 'Rajesh M.',
                rating: 3.8,
                comment: 'Decent college with strong academic support, but facilities need improvement.',
                date: '2024-01-25'
            }
        ]
    }
    ,
    30:{
        name: 'St. Joseph’s Degree College',
        description: 'St. Joseph’s Degree College offers undergraduate programs in arts, commerce, and science. The college is committed to providing value-based education, focusing on both academic and personal growth.',
        history: 'Established in the 1990s, the college has grown to become a reputable institution in Vijayawada.',
        admissions: 'Admissions are based on merit, with reservations as per government norms.',
        type: 'Private',
        AcademicAffiliations: 'Affiliated with Krishna University.',
        Location: 'Vijayawada, Andhra Pradesh, India',
        Website: 'josephscollege.ac.in',
        reviews: [
            {
                reviewer: 'Sita R.',
                rating: 4.5,
                comment: 'Excellent faculty and a supportive learning environment. Highly recommended!',
                date: '2024-06-15'
            },
            {
                reviewer: 'Kiran S.',
                rating: 4.0,
                comment: 'Good academic programs, but the campus could use some modernization.',
                date: '2024-04-22'
            },
            {
                reviewer: 'Anita J.',
                rating: 3.9,
                comment: 'A solid choice for those seeking a balanced education. However, more activities would be great.',
                date: '2024-02-10'
            }
        ]
    }
    
    
    // Add all colleges here...
};

const CollegeDetails = () => {
    const { id } = useParams();
    const college = collegeDetails[id];
    const navigate = useNavigate();

    // State for managing review form visibility and input values
    const [showReviewForm, setShowReviewForm] = useState(false);
    const [newReview, setNewReview] = useState({
        comment: '',
        rating: '',
        date: '',
    });

    if (!college) {
        return <h2>College not found</h2>;
    }

    // Function to handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewReview((prev) => ({ ...prev, [name]: value }));
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const { comment, rating, date } = newReview;
        
        // Assuming reviews is a state variable you would add
        // Here we directly mutate college for simplicity; adjust according to your state management
        college.reviews.push({
            reviewer: 'you', // Placeholder for reviewer name
            rating: parseFloat(rating),
            comment,
            date,
        });
        
        // Clear the form and hide it
        setNewReview({ comment: '', rating: '', date: '' });
        setShowReviewForm(false);
    };
    return (
        <div>
            <h2>{college.name}</h2>
            <div style={{ border: '1px solid #ddd', padding: '20px', margin: '10px 0' }}>
                <h3>Description:</h3>
                <p style={{ fontSize: '1.2rem' }}>{college.description}</p>
            </div>

            <div style={{ border: '1px solid #ddd', padding: '20px', margin: '10px 0' }}>
                <h3>Admissions:</h3>
                <p style={{ fontSize: '1.2rem' }}>{college.admissions}</p>
            </div>

            <div style={{ border: '1px solid #ddd', padding: '20px', margin: '10px 0' }}>
                <h3>Academic Affiliations:</h3>
                <p style={{ fontSize: '1.2rem' }}>{college.AcademicAffiliations}</p>
            </div>

            <div style={{ border: '1px solid #ddd', padding: '20px', margin: '10px 0' }}>
                <h3>Location:</h3>
                <p style={{ fontSize: '1.2rem' }}>{college.Location}</p>
            </div>

            <div style={{ border: '1px solid #ddd', padding: '20px', margin: '10px 0' }}>
                <h3>History:</h3>
                <p style={{ fontSize: '1.2rem' }}>{college.history}</p>
            </div>

            <div style={{ border: '1px solid #ddd', padding: '20px', margin: '10px 0' }}>
                <h3>Type:</h3>
                <p style={{ fontSize: '1.2rem' }}>{college.type}</p>
            </div>
            <div style={{ border: '1px solid #ddd', padding: '20px', margin: '10px 0' }}>
                <h3>Website:</h3>
                <p style={{ fontSize: '1.2rem' }}>
                    <a href={`https://${college.Website}`} target="_blank" rel="noopener noreferrer">
                        {college.Website}
                    </a>
                </p>
            </div>



            {/* Other college details... */}

            <h3>Reviews:</h3>
            <div>
                {college.reviews.map((review, index) => (
                    <div
                        key={index}
                        style={{
                            border: '1px solid #ddd',
                            padding: '15px',
                            margin: '10px 0',
                            borderRadius: '5px',
                            backgroundColor: '#f9f9f9',
                        }}
                    >
                        <p><strong>Reviewer:</strong> {review.reviewer}</p>
                        <p><strong>Rating:</strong> {review.rating}</p>
                        <p><strong>Comment:</strong> {review.comment}</p>
                        <p><strong>Date:</strong> {review.date}</p>
                    </div>
                ))}
            </div>

            <div style={{ marginTop: '20px' }}>
                <button onClick={() => navigate('/')}>Back to Main</button>
                <button onClick={() => setShowReviewForm(!showReviewForm)}>
                    {showReviewForm ? 'Cancel' : 'Add Review'}
                </button>
            </div>

            {showReviewForm && (
                <form onSubmit={handleSubmit} style={{ marginTop: '20px', border: '1px solid #ddd', padding: '20px' }}>
                    <h4>Add a Review:</h4>
                    <div>
                        <label>
                            Comment:
                            <input
                                type="text"
                                name="comment"
                                value={newReview.comment}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Rating:
                            <input
                                type="number"
                                name="rating"
                                value={newReview.rating}
                                onChange={handleInputChange}
                                min="1"
                                max="5"
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Date:
                            <input
                                type="date"
                                name="date"
                                value={newReview.date}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                    </div>
                    <button type="submit">Submit Review</button>
                </form>
            )}
        </div>
    );
};

export default CollegeDetails;

