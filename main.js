let SHEET_ID = '2PACX-1vRhWIgZ_FrqmDvNvUj_bRGnAaS4HHrECOThdA0z76XMutZxJ7Zbrd0pIERoCO0GvE7oCkIYkwMTmj0S';
let SHEET_TITLE = 'Data Template';
let SHEET_RANGE = 'A1:G1';

let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

fetch(FULL_URL)
.then(res => res.text())
.then(rep => {
    let data = JSON.parse(rep.substr(47).slice(0,-2));
    console.log(res);
})

const table = [
    // "CN", "https://static.kasatria.com/pivot-img/photo/019.jpg", "Lee Siew Suan", "Writing", 1,
    "CN", "https://static.kasatria.com/pivot-img/photo/019.jpg", "Lee Siew Suan", "Writing", 1, 
    "CN", "https://static.kasatria.com/pivot-img/photo/020.jpg", "New Yee Chian", "Cooking", 1, 
    "CN", "https://static.kasatria.com/pivot-img/photo/021.jpg", "Wong Thiam Fook", "Traveling", 2, 
    "MY", "https://static.kasatria.com/pivot-img/photo/022.jpg", "Norsuzilawati Mohd Noor", "Painting", 2, 
    "MY", "https://static.kasatria.com/pivot-img/photo/023.jpg", "Norzainah Omar", "Hiking", 2,
    "IN", "https://static.kasatria.com/pivot-img/photo/024.jpg", "Meghandran Nathy", "Cooking", 2,
    "IN", "https://static.kasatria.com/pivot-img/photo/025.jpg", "Joyshree Goswami", "Painting", 2, 
    "IN", "https://static.kasatria.com/pivot-img/photo/026.jpg", "Geetha Maniam", "Cooking", 2,
    "MY", "https://static.kasatria.com/pivot-img/photo/027.jpg", "Abdul Rahim Osman", "Cooking", 2, 
    "IN", "https://static.kasatria.com/pivot-img/photo/028.jpg", "Prem Anand Raj", "Gardening", 2,
    "IN", "https://static.kasatria.com/pivot-img/photo/029.jpg", "Piara Singh Sarwan Singh", "Writing", 3,
    "MY", "https://static.kasatria.com/pivot-img/photo/030.jpg", "Othman b Abdul Rahman", "Gardening", 3,
    "IN", "https://static.kasatria.com/pivot-img/photo/031.jpg", "Sathiaseelan Paul Thurai", "Gardening", 3,
    "MY", "https://static.kasatria.com/pivot-img/photo/MY0014.jpg", "Abdul Farid Alias", "Writing", 3,
    "MY", "https://static.kasatria.com/pivot-img/photo/MY0010.jpg", "Abu Hassan Assari Ibrahim", "Gardening", 3,
    "MY", "https://static.kasatria.com/pivot-img/photo/MY_003.jpg", "Faridah Ahmad Iskandar", "Writing", 3,
    "MY", "https://static.kasatria.com/pivot-img/photo/MY0009.jpg", "Muzaffar Hisham", "Cooking", 3,
    "US", "https://static.kasatria.com/pivot-img/photo/CA0088.jpg", "Isaac Cardinal", "Gardening", 3,
    "IN", "https://static.kasatria.com/pivot-img/photo/IND_021.jpg", "Prabunathan A/L Gopal", "Writing", 4,
    "MY", "https://static.kasatria.com/pivot-img/photo/MY0012.jpg", "Taswin Zakaria", "Gardening", 4,
    "US", "https://static.kasatria.com/pivot-img/photo/039.jpg", "Crystal Carter", "Cooking", 4,
    "CN", "https://static.kasatria.com/pivot-img/photo/040.jpg", "Vivian Grapentine", "Writing", 4,
    "US", "https://static.kasatria.com/pivot-img/photo/041.jpg", "Joey De Leion", "Hiking", 4,
    "US", "https://static.kasatria.com/pivot-img/photo/042.jpg", "Mark Feehily", "Cooking", 4,
    "CN", "https://static.kasatria.com/pivot-img/photo/114.jpg", "Cheong Choong Kong", "Painting", 4,
    "CN", "https://static.kasatria.com/pivot-img/photo/115.jpg", "George Lee Lap Wah", "Painting", 4,
    "CN", "https://static.kasatria.com/pivot-img/photo/116.jpg", "Yong Mei Theng", "Writing", 4,
    "CN", "https://static.kasatria.com/pivot-img/photo/117.jpg", "Tang Zhee Kim", "Painting", 4,
    "CN", "https://static.kasatria.com/pivot-img/photo/118.jpg", "Tan Miaw Wei", "Cooking", 4,
    "CN", "https://static.kasatria.com/pivot-img/photo/119.jpg", "Cheng Ming Soon", "Traveling", 4,
    "CN", "https://static.kasatria.com/pivot-img/photo/120.jpg", "Lee Fong Fong", "Painting", 4,
    "MY", "https://static.kasatria.com/pivot-img/photo/121.jpg", "Amir Amran Karim", "Cooking", 4,
    "IN", "https://static.kasatria.com/pivot-img/photo/122.jpg", "Krishnan CK Menon", "Cooking", 4,
    "IN", "https://static.kasatria.com/pivot-img/photo/IND_041.jpg", "Aishwarya Rai", "Hiking", 4,
    "IN", "https://static.kasatria.com/pivot-img/photo/124.jpg", "Simone Kumar Gopalan", "Hiking", 4,
    "MY", "https://static.kasatria.com/pivot-img/photo/125.jpg", "Maimoonah Hussain", "Cooking", 4,
    "IN", "https://static.kasatria.com/pivot-img/photo/126.jpg", "Chanda Kochar", "Hiking", 5,
    "IN", "https://static.kasatria.com/pivot-img/photo/127.jpg", "Shyamala Gopinath", "Traveling", 5,
    "IN", "https://static.kasatria.com/pivot-img/photo/128.jpg", "Suren Zedek", "Writing", 5,
    "IN", "https://static.kasatria.com/pivot-img/photo/129.jpg", "Danial Kuilan", "Writing", 5,
    "IN", "https://static.kasatria.com/pivot-img/photo/130.jpg", "Levi Asher Anamalai", "Traveling", 5,
    "US", "https://static.kasatria.com/pivot-img/photo/131.jpg", "Tristan Martin", "Gardening", 5,
    "US", "https://static.kasatria.com/pivot-img/photo/CA0294.jpg", "David Conner", "Gardening", 5,
    "US", "https://static.kasatria.com/pivot-img/photo/CA0285.jpg", "Kerry Jen Katona", "Gardening", 5,
    "US", "https://static.kasatria.com/pivot-img/photo/134.jpg", "Gilbert Kohnke", "Gardening", 5,
    "US", "https://static.kasatria.com/pivot-img/photo/135.jpg", "Spencer Murray", "Gardening", 5,
    "MY", "https://static.kasatria.com/pivot-img/photo/136.jpg", "Yaacob Mohd Zain", "Hiking", 5,
    "MY", "https://static.kasatria.com/pivot-img/photo/137.jpg", "Hatini Mat Husin", "Hiking", 5,
    "MY", "https://static.kasatria.com/pivot-img/photo/138.jpg", "Ariffin Alias", "Writing", 5,
    "MY", "https://static.kasatria.com/pivot-img/photo/139.jpg", "Abdul Malik A Rahman", "Gardening", 5,
    "MY", "https://static.kasatria.com/pivot-img/photo/140.jpg", "Samad Mahid Zain", "Hiking", 5,
    "MY", "https://static.kasatria.com/pivot-img/photo/141.jpg", "Johan Hashim", "Cooking", 5,
    "MY",  "https://static.kasatria.com/pivot-img/photo/142.jpg", "Samsiah Zainal", "Painting", 5,
    "CN", "https://static.kasatria.com/pivot-img/photo/009.jpg", "Tay Eng Yaw", "Cooking", 5,
    "CN", "https://static.kasatria.com/pivot-img/photo/010.jpg", "Cynthiea Hong Pei Min", "Painting", 6,
    "CN", "https://static.kasatria.com/pivot-img/photo/011.jpg", "Lim Yong Siang", "Gardening", 6,
    "MY", "https://static.kasatria.com/pivot-img/photo/018.jpg", "Mohd Azam Mohd Bakar", "Cooking", 9,
    "IN", "https://static.kasatria.com/pivot-img/photo/043.jpg", "Jagathesan Shanmugam", "Gardening", 9,
    "IN", "https://static.kasatria.com/pivot-img/photo/044.jpg", "Christiana Tharsis", "Hiking", 9,
    "IN", "https://static.kasatria.com/pivot-img/photo/045.jpg", "Amutha Rakwan", "Gardening", 9,
    "MY", "https://static.kasatria.com/pivot-img/photo/046.jpg", "Wan Rosmawati Wan Ibrahim", "Cooking", 9,
    "MY", "https://static.kasatria.com/pivot-img/photo/047.jpg", "Khatimah Mahadi", "Painting", 9,
    "MY", "https://static.kasatria.com/pivot-img/photo/048.jpg", "Nor Rozita Nordin", "Painting", 9,
    "MY", "https://static.kasatria.com/pivot-img/photo/049.jpg", "Abdul Aziz Man", "Cooking", 9,
    "MY", "https://static.kasatria.com/pivot-img/photo/050.jpg", "Nimma Safira Khalid", "Traveling", 9,
    "CN", "https://static.kasatria.com/pivot-img/photo/012.jpg", "Lam Swee Kim", "Painting", 9,
    "CN", "https://static.kasatria.com/pivot-img/photo/013.jpg", "Tai Yee Shian", "Painting", 9,
    "CN", "https://static.kasatria.com/pivot-img/photo/014.jpg", "Euodia Ooi", "Writing", 9,
    "CN", "https://static.kasatria.com/pivot-img/photo/015.jpg", "Ng Jia Nian", "Cooking", 9,
    "CN", "https://static.kasatria.com/pivot-img/photo/016.jpg", "Ong Tze Jun", "Hiking", 9,
    "CN", "https://static.kasatria.com/pivot-img/photo/017.jpg", "Brian Choong Chee Keong", "Traveling", 9,
    "MY", "https://static.kasatria.com/pivot-img/photo/086.jpg", "Shaharuddin Abg Mansor", "Gardening", 6,
    "MY", "https://static.kasatria.com/pivot-img/photo/087.jpg", "Mohd Izani Ashari", "Traveling", 6,
    "MY", "https://static.kasatria.com/pivot-img/photo/088.jpg", "Roshan Thiran", "Cooking", 6,
    "MY", "https://static.kasatria.com/pivot-img/photo/089.jpg", "Shahazwan Harris", "Painting", 6,
    "MY", "https://static.kasatria.com/pivot-img/photo/090.jpg", "Saiful Dzulkifly", "Painting", 6,
    "MY", "https://static.kasatria.com/pivot-img/photo/091.jpg", "Jamie Haniff Ramlee", "Gardening", 6,
    "MY", "https://static.kasatria.com/pivot-img/photo/092.jpg", "Azim Azli", "Gardening", 6,
    "MY", "https://static.kasatria.com/pivot-img/photo/093.jpg", "Zaida Khalida Shaari", "Cooking", 6,
    "MY", "https://static.kasatria.com/pivot-img/photo/094.jpg", "Nurul Nabila Huda Che Ad", "Hiking", 6,
    "MY", "https://static.kasatria.com/pivot-img/photo/095.jpg", "Sarimah Samad-Imran", "Painting", 6,
    "MY", "https://static.kasatria.com/pivot-img/photo/096.jpg", "Wan Nur Nordiyana", "Cooking", 6,
    "MY", "https://static.kasatria.com/pivot-img/photo/097.jpg", "Fatimah Husna", "Writing", 6,
    "MY", "https://static.kasatria.com/pivot-img/photo/098.jpg", "Nurshafiqah Saad", "Cooking", 6,
    "IN", "https://static.kasatria.com/pivot-img/photo/IND_005.jpg", "Amerjit Singh Bhag Singh", "Writing", 6,
    "MY", "https://static.kasatria.com/pivot-img/photo/100.jpg", "Nora Abd Manaf", "Writing", 6,
    "CN", "https://static.kasatria.com/pivot-img/photo/101.jpg", "Walter Michael Chan", "Cooking", 7,
    "CN", "https://static.kasatria.com/pivot-img/photo/102.jpg", "Teng Chean Choy", "Cooking", 7,
    "CN", "https://static.kasatria.com/pivot-img/photo/103.jpg", "Chua Bee Chin", "Painting", 10,
    "IN", "https://static.kasatria.com/pivot-img/photo/155.jpg", "Santhanamary John", "Writing", 10,
    "MY", "https://static.kasatria.com/pivot-img/photo/156.jpg", "Nor Arzlin Redzwan", "Gardening", 10,
    "MY", "https://static.kasatria.com/pivot-img/photo/157.jpg", "Zuraidah Atan", "Cooking", 10,
    "MY", "https://static.kasatria.com/pivot-img/photo/158.jpg", "Shahrul Izzan Abdul Karim", "Traveling", 10,
    "MY", "https://static.kasatria.com/pivot-img/photo/m_047.jpg", "Putri Shireen Syed Othman", "Painting", 10,
    "MY", "https://static.kasatria.com/pivot-img/photo/160.jpg", "Abdul Hadzi Marzuki", "Writing", 10,
    "MY", "https://static.kasatria.com/pivot-img/photo/161.jpg", "Yasmin Ahmad", "Painting", 10,
    "MY", "https://static.kasatria.com/pivot-img/photo/162.jpg", "Halipah Binti Esa", "Traveling", 10,
    "MY", "https://static.kasatria.com/pivot-img/photo/163.jpg", "Habibah Abdul", "Painting", 10,
    "MY", "https://static.kasatria.com/pivot-img/photo/164.jpg", "Zulkarnain Ahmad", "Writing", 10,
    "MY", "https://static.kasatria.com/pivot-img/photo/165.jpg", "Fauziah Mohd Noor", "Painting", 10,
    "MY", "https://static.kasatria.com/pivot-img/photo/196.jpg", "Mohd Yunus Idris", "Writing", 10,
    "MY", "https://static.kasatria.com/pivot-img/photo/197.jpg", "Ahmad Jauhari Yahya", "Traveling", 10,
    "MY", "https://static.kasatria.com/pivot-img/photo/198.jpg", "Saifol Bahri Mohamad Shamlan", "Writing", 10,
    "MY", "https://static.kasatria.com/pivot-img/photo/199.jpg", "Isham Ishak", "Gardening", 7,
    "MY", "https://static.kasatria.com/pivot-img/photo/200.jpg", "Mohd Hafizuddin Mansor", "Hiking", 7,
    "US", "https://static.kasatria.com/pivot-img/photo/CA0292.jpg", "Stuart Cardell", "Gardening", 7,
    "US", "https://static.kasatria.com/pivot-img/photo/CA0237.jpg", "Abigail Wellington", "Painting", 7,
    "CN", "https://static.kasatria.com/pivot-img/photo/c_035.jpg", "Gino Chin", "Cooking", 7,
    "CN", "https://static.kasatria.com/pivot-img/photo/c_016.jpg", "Meon Khor", "Writing", 7,
    "CN", "https://static.kasatria.com/pivot-img/photo/c_013.jpg", "Lim Joo ann", "Writing", 7,
    "CN", "https://static.kasatria.com/pivot-img/photo/CN_038.jpg", "Yong Hai Wen", "Traveling", 7,
    "CN", "https://static.kasatria.com/pivot-img/photo/CN_024.jpg", "Yuki Low Mei Shan", "Hiking", 7,
    "CN", "https://static.kasatria.com/pivot-img/photo/J_013.jpg", "Jessica Tee Yan Lai", "Hiking", 7,
    "CN", "https://static.kasatria.com/pivot-img/photo/J_003.jpg", "Sam Yam", "Cooking", 7,
    "IN", "https://static.kasatria.com/pivot-img/photo/IND_057.jpg", "Shanker Jorrama", "Writing", 7,
    "IN", "https://static.kasatria.com/pivot-img/photo/IND_010.jpg", "Vick Viknes", "Painting", 7,
    "IN", "https://static.kasatria.com/pivot-img/photo/IND_035.jpg", "Arul Krishnan", "Hiking", 7,
    "IN", "https://static.kasatria.com/pivot-img/photo/IND_014.jpg", "Shamini Mohanan", "Writing", 7,
    "US", "https://static.kasatria.com/pivot-img/photo/o_009.jpg", "Theodore Frazer", "Gardening", 7,
    "IN", "https://static.kasatria.com/pivot-img/photo/IND_028.jpg",  "Aju Varghese", "Gardening", 7,
    "IN", "https://static.kasatria.com/pivot-img/photo/IND_032.jpg", "Shahrukh Khan", "Gardening", 7,
    "IN", "https://static.kasatria.com/pivot-img/photo/IND_040.jpg", "Prithviraj Sukumaran", "Gardening", 7,
    "US", "https://static.kasatria.com/pivot-img/photo/CA0134.jpg",  "Sarah Miller", "Painting", 7,
    "IN", "https://static.kasatria.com/pivot-img/photo/IND_016.jpg",  "Monali Thakur", "Painting", 7,
    "IN", "https://static.kasatria.com/pivot-img/photo/IND_044.jpg", "Keerubalami Ponnudi", "Writing", 7,
    "IN", "https://static.kasatria.com/pivot-img/photo/i_023.jpg",  "Saint Sahana", "Hiking", 7,
    "MY", "https://static.kasatria.com/pivot-img/photo/m_020.jpg",  "Munish Thabur", "Hiking", 7,
    "IN", "https://static.kasatria.com/pivot-img/photo/IND_011.jpg", "Yogesh Balakrishnamur", "Painting", 7,
    "IN", "https://static.kasatria.com/pivot-img/photo/IND_049.jpg", "Sharmilla Mogan", "Traveling", 7,
    "IN", "https://static.kasatria.com/pivot-img/photo/IND_045.jpg", "Janesree Gunasegern", "Painting", 7,
    "IN", "https://static.kasatria.com/pivot-img/photo/i_018.jpg", "Preya Nadarasa", "Cooking", 7,
    "IN", "https://static.kasatria.com/pivot-img/photo/i_028.jpg", "Uma Shamini", "Cooking", 7,
    "IN", "https://static.kasatria.com/pivot-img/photo/IND_053.jpg", "Geetha Kumar", "Traveling", 7,
    "IN", "https://static.kasatria.com/pivot-img/photo/IND_031.jpg", "Jeeva Rajadran", "Cooking", 7,
    "IN", "https://static.kasatria.com/pivot-img/photo/IND_008.jpg", "Nadaraajan Perumal", "Writing", 7,
    "IN", "https://static.kasatria.com/pivot-img/photo/IND_039.jpg", "Shri Gobaradhan", "Writing", 7,
    "IN", "https://static.kasatria.com/pivot-img/photo/IND_034.jpg", "Satees Muniady", "Gardening", 7,
    "MY", "https://static.kasatria.com/pivot-img/photo/m_190.jpg", "Nur Syazwani Nabilah Ibrahim", "Painting", 7,
    "IN", "https://static.kasatria.com/pivot-img/photo/IND_042.jpg", "Geetha Davethas", "Hiking", 7,
    "US", "https://static.kasatria.com/pivot-img/photo/G_027.jpg", "Pricella Ance", "Cooking", 7,
    "IN", "https://static.kasatria.com/pivot-img/photo/i_013.jpg", "Kumarran Thanrayan", "Cooking", 7,
    "IN", "https://static.kasatria.com/pivot-img/photo/i_002.jpg", "Tineswary Pannaparon", "Painting", 7,
    "IN", "https://static.kasatria.com/pivot-img/photo/IND_015.jpg", "Vinothyni Anannthi", "Painting", 7,
    "IN", "https://static.kasatria.com/pivot-img/photo/IND_013.jpg", "Pilva Bhatia", "Painting", 7,
    "MY", "https://static.kasatria.com/pivot-img/photo/m_027.jpg", "Wan Nahijah Mohamad", "Painting", 7,
    "MY", "https://static.kasatria.com/pivot-img/photo/m_066.jpg", "Rahimi Muhamad", "Writing", 7,
    "MY", "https://static.kasatria.com/pivot-img/photo/m_090.jpg", "Shuhada Shahira", "Traveling", 7,
    "MY", "https://static.kasatria.com/pivot-img/photo/mus_202.jpg", "Yana Husin", "Gardening", 7,
    "MY", "https://static.kasatria.com/pivot-img/photo/mus_163.jpg", "Yusri Shafie", "Hiking", 7,
    "MY", "https://static.kasatria.com/pivot-img/photo/mus_166.jpg", "Nurul Shafiza Mat Isa", "Painting", 7,
    "MY", "https://static.kasatria.com/pivot-img/photo/mus_194.jpg", "Aidan Ohara", "Hiking", 7,
    "US", "https://static.kasatria.com/pivot-img/photo/CA0128.jpg", "Ella Berry", "Cooking", 7,
    "MY", "https://static.kasatria.com/pivot-img/photo/mus_178.jpg", "Noor Atheerah Zulkipli", "Cooking", 7,
    "MY", "https://static.kasatria.com/pivot-img/photo/m_185.jpg", "Ikmal Zakaria", "Painting", 7,
    "MY", "https://static.kasatria.com/pivot-img/photo/p_047.jpg", "Syed Azuwan Syed Helmi", "Writing", 7,
    "MY", "https://static.kasatria.com/pivot-img/photo/m_187.jpg", "Haziq Zamri", "Painting", 7,
    "MY", "https://static.kasatria.com/pivot-img/photo/mus_056.jpg", "Nor Fazila", "Cooking", 7,
    "MY", "https://static.kasatria.com/pivot-img/photo/m_116.jpg", "Muhd Ruzhan", "Traveling", 7,
    "MY", "https://static.kasatria.com/pivot-img/photo/m_154.jpg", "Azhar Masli", "Writing", 7,
    "MY", "https://static.kasatria.com/pivot-img/photo/m_120.jpg", "Mohd Riduan Hamin", "Gardening", 7,
    "US", "https://static.kasatria.com/pivot-img/photo/CA0274.jpg", "Freya Rogers", "Painting", 7,
    "MY", "https://static.kasatria.com/pivot-img/photo/m_181.jpg", "Harris Azman", "Hiking", 7,
    "MY", "https://static.kasatria.com/pivot-img/photo/th_337.jpg", "Muhammad Adli Azri", "Painting", 7,
    "MY", "https://static.kasatria.com/pivot-img/photo/m_177.jpg", "Jafri Mohd", "Painting", 7,
    "MY", "https://static.kasatria.com/pivot-img/photo/mus_019.jpg", "Aten Zulkifly", "Writing", 7,
    "MY", "https://static.kasatria.com/pivot-img/photo/mus_045.jpg", "Eyqa Hassan", "Painting", 7,
    "MY", "https://static.kasatria.com/pivot-img/photo/m_018.jpg", "Muhd Yazid", "Hiking", 7,
    "MY", "https://static.kasatria.com/pivot-img/photo/p_027.jpg", "Muhammad Syafiq Suhaimi", "Writing", 7,
    "MY", "https://static.kasatria.com/pivot-img/photo/p_014.jpg", "Nashrul Amin", "Gardening", 7,
    "MY", "https://static.kasatria.com/pivot-img/photo/mus_064.jpg", "Nur Syahirah", "Painting", 7,
    "MY", "https://static.kasatria.com/pivot-img/photo/mus_114.jpg", "Syamimy Ghani", "Traveling", 7,
    "MY", "https://static.kasatria.com/pivot-img/photo/p_028.jpg", "Shahir Sukri", "Painting", 7,
    "MY", "https://static.kasatria.com/pivot-img/photo/p_030.jpg", "Amierul Miyul", "Gardening", 7,
    "MY", "https://static.kasatria.com/pivot-img/photo/mus_090.jpg", "Nara Sharkirra", "Writing", 7,
    "MY", "https://static.kasatria.com/pivot-img/photo/p_022.jpg", "Muhamad Hafiz Bob", "Gardening", 7,
    "MY", "https://static.kasatria.com/pivot-img/photo/p_023.jpg", "Mohd Shahril", "Gardening", 7,
    "MY", "https://static.kasatria.com/pivot-img/photo/mus_091.jpg", "Eyka Abdul Ghani", "Traveling", 7,
    "MY", "https://static.kasatria.com/pivot-img/photo/m_167.jpg", "Mohamad Khuzairy", "Cooking", 7,
    "MY", "https://static.kasatria.com/pivot-img/photo/m_179.jpg",  "Nana Hanna", "Traveling", 7,
    "MY", "https://static.kasatria.com/pivot-img/photo/p_034.jpg", "Mohd Hanafi Azhar", "Gardening", 7,
    "MY", "https://static.kasatria.com/pivot-img/photo/p_045.jpg", "Zenki Afra", "Gardening", 7,
    "MY", "https://static.kasatria.com/pivot-img/photo/p_050.jpg", "Mohamad Hairie", "Gardening", 7,
    "MY", "https://static.kasatria.com/pivot-img/photo/m_168.jpg", "Mohd Syafiq", "Gardening", 7,
    "MY", "https://static.kasatria.com/pivot-img/photo/m_165.jpg", "Muhammad Ashri", "Traveling", 7,
    "MY", "https://static.kasatria.com/pivot-img/photo/mus_024.jpg", "Yusni Asnida", "Traveling", 7,
    "MY", "https://static.kasatria.com/pivot-img/photo/m_049.jpg", "Shaheera Mohd Aniq", "Traveling", 7,
    "MY", "https://static.kasatria.com/pivot-img/photo/m_103.jpg", "Nursyamimi Atiqah", "Cooking", 7,
    "US", "https://static.kasatria.com/pivot-img/photo/G_038.jpg", "Catherine Wheeler", "Hiking", 7,
    "MY", "https://static.kasatria.com/pivot-img/photo/m_110.jpg", "Azizah Mahzan", "Hiking", 7,
    "MY", "https://static.kasatria.com/pivot-img/photo/m_149.jpg", "Mohd Azmi", "Traveling", 7,
    "US", "https://static.kasatria.com/pivot-img/photo/G_035.jpg", "Anastasia Morrison", "Hiking", 7,
    "MY", "https://static.kasatria.com/pivot-img/photo/ph_151.jpg", "Razak Muhaidin", "Gardening", 7,
    "US", "https://static.kasatria.com/pivot-img/photo/o_014.jpg", "Helena Tillsley", "Gardening", 7,
    "US", "https://static.kasatria.com/pivot-img/photo/G_057.jpg", "Ryder Fletcher", "Gardening", 7,
    "US", "https://static.kasatria.com/pivot-img/photo/G_058.jpg", "Sara Fessenden", "Writing", 7,
    "CN", "https://static.kasatria.com/pivot-img/photo/J_011.jpg", "Jeffrey Ewing", "Gardening", 7,
    "US", "https://static.kasatria.com/pivot-img/photo/CA0162.jpg", "Dawson Hoffman", "Cooking", 7,
    "US", "https://static.kasatria.com/pivot-img/photo/G_052.jpg", "Jonne Macdonald", "Hiking", 7,
    "US", "https://static.kasatria.com/pivot-img/photo/CA0267.jpg", "Pierre Henry", "Gardening", 7,
    "US", "https://static.kasatria.com/pivot-img/photo/G_039.jpg", "Collen McClintock", "Gardening", 7,
    
];

let camera, scene, renderer, controls, composer;
var hblur, vblur;
let targets = {simple: [], table: [], sphere: [], helix: [], dhelix: [], grid: []};

init();
animate();

function init() {

    initCamera();

    initScene();

    initObjects();

    addClickListeners();

    initRenderer();

    initTrackbarControls();

    transform(targets.table, 2000);

    window.addEventListener('resize', onWindowResize, false);

}

function initCamera() {

    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 3000;

}

function initScene() {

    scene = new THREE.Scene();

}

function initRenderer() {

    renderer = new THREE.CSS3DRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('container').appendChild(renderer.domElement);
}

function initObjects() {

    simpleObjectsLayout();
    generateGeometricLayouts();

}

function addClickListeners() {

    addClickListener(targets.table, 'table');
    addClickListener(targets.sphere, 'sphere');
    // addClickListener(targets.helix, 'helix');
    addClickListener(targets.dhelix, 'dhelix');
    addClickListener(targets.grid, 'grid');
}

function simpleObjectsLayout() {

    for (let i = 0; i < table.length; i += 5) {

        let object = new THREE.CSS3DObject(htmlElement(table, i));
        object.position.x = Math.random() * 4000 - 2000;
        object.position.y = Math.random() * 4000 - 2000;
        object.position.z = Math.random() * 4000 - 2000;

        scene.add(object);
        targets.simple.push(object);
        tableLayout(table, i);

    }

}

function htmlElement(table, i) {
    let element = document.createElement('div');
    element.className = 'element';
    // element.style.backgroundColor = 'rgba(0,127,127,' + (Math.random() * 0.5 + 0.25) + ')';
    // element.style.background = 'linear-gradient(to right, red , yellow)';
    
    // Get the group number from the table data
    // let group = table[i + 3];
    // let group = table[(i / 5) + 1];
    let group = table[(i + 4)];

    // Set the background color based on the group
    element.style.backgroundColor = getBackgroundColor(group);

    let number = document.createElement('div');
    number.className = 'number';
    // number.textContent = (i / 5) + 1;
    number.textContent = table[i + 4];
    element.appendChild(number);

    let country = document.createElement('div');
    country.className = 'country';
    country.textContent = table[i];
    element.appendChild(country);

    // let symbol = document.createElement('div');
    // symbol.className = 'symbol';
    // symbol.textContent = table[i];
    // element.appendChild(symbol);

    let picture = document.createElement('img');
    picture.className = 'picture';
    picture.src = table[i+1];
    element.appendChild(picture);

    let details = document.createElement('div');
    details.className = 'details';
    details.innerHTML = table[i + 2] + '<br>' + table[i + 3];
    element.appendChild(details);

    element.addEventListener('click', ()=>elementClickHandler(i), false);

    return element;
}

function getBackgroundColor(group) {
    if (group <= 1) {
        return '#BF3022'; // Most left groups
    } else if (group >= 2 && group <= 4) {
        return '#FDCA35'; // Middle groups
    } else if (group >= 5 && group <= 7) {
        return '#3A9F48'; // Most right groups
    } else if (group >= 8 && group <= 10) {
        return '#22BFBF'; // Most right groups
    } 
}

// function getBackgroundColor(networth) {

    // const amount = parseFloat(networth.replace(/[$,]/g, ''));
//     if (networth <= 100000) {
//         return '#BF3022'; // Most left networth
//     } else if (networth >= 100001 && networth <= 200000) {
//         return '#FDCA35'; // Middle networth
//     } else if (networth >= 200001) {
//         return '#3A9F48'; // Most right networth
//     } 
// }

function elementClickHandler(i){

    transform(targets.table,1000);

    new TWEEN.Tween(targets.simple[i / 5].position)
        .to({
            x: 0,
            y: 0,
            z: 2500
        }, Math.random() * 2000 + 2000)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

    new TWEEN.Tween(this)
        .to({}, 2000 * 2)
        .onUpdate(render)
        .start();
}

// function tableLayout(table, index) {

//     let object = new THREE.Object3D();

//     object.position.x = (table[index + 3] * 140) - 1330;
//     object.position.y = -(table[index + 4] * 180) + 990;
//     targets.table.push(object);

// }

function tableLayout(table, index) {
    const COLS = 100;
    const ROWS = 10;
    const TILE_WIDTH = 50;  // Spacing between elements horizontally
    const TILE_HEIGHT = 180; // Spacing between elements vertically
    
    let object = new THREE.Object3D();
    
    // Calculate row and column from index
    const col = index % COLS;
    const row = Math.floor(index / COLS);
    
    // Calculate position
    // Center the grid by subtracting half the total width/height
    object.position.x = (col * TILE_WIDTH) - ((COLS * TILE_WIDTH) / 2);
    object.position.y = -(row * TILE_HEIGHT) + ((ROWS * TILE_HEIGHT) / 2);
    
    targets.table.push(object);
}

function addClickListener(target, elementId) {

    const button = document.getElementById(elementId);

    button.addEventListener('click', function () {
        transform(target, 2000);
    }, false);

}

function initTrackbarControls() {
    controls = new THREE.TrackballControls(camera, renderer.domElement);
    controls.rotateSpeed = 0.5;
    controls.minDistance = 500;
    controls.maxDistance = 6000;
    controls.addEventListener('change', render);
}

function generateGeometricLayouts() {

    let sphereVector = new THREE.Vector3();
    let helixVector = new THREE.Vector3();

    let helixVector1 = new THREE.Vector3();
    let helixVector2 = new THREE.Vector3();

    for (let i = 0, l = targets.simple.length; i < l; i++) {
        addSphereObject(sphereVector, i, l);
        addHelixObject(helixVector, i);
        addDoubleHelixObject(helixVector1, helixVector2, i);
        addGridObject(i, 5, 5);
    }

}

function addSphereObject(sphereVector, index, length) {

    const phi = Math.acos(-1 + (2 * index) / length);
    const theta = Math.sqrt(length * Math.PI) * phi;
    let object = new THREE.Object3D();

    object.position.setFromSphericalCoords(800, phi, theta);

    sphereVector.copy(object.position).multiplyScalar(2);

    object.lookAt(sphereVector);

    targets.sphere.push(object);
}

function addHelixObject(helixVector, index) {

    const theta = index * 0.175 + Math.PI;
    const y = -(index * 10) + 450;
    let object = new THREE.Object3D();

    object.position.setFromCylindricalCoords(900, theta, y);

    helixVector.x = object.position.x * 2;
    helixVector.y = object.position.y;
    helixVector.z = object.position.z * 2;

    object.lookAt(helixVector);

    targets.helix.push(object);
}


function addDoubleHelixObject(helixVector1, helixVector2, index) {
    const theta1 = index * 0.175 + Math.PI;
    const theta2 = index * 0.175 + Math.PI + Math.PI; // Offset second helix by 180 degrees
    const y = -(index * 20) + 650;

    // First helix
    let object1 = new THREE.Object3D();
    object1.position.setFromCylindricalCoords(900, theta1, y);
    helixVector1.set(object1.position.x * 2, object1.position.y, object1.position.z * 2);
    object1.lookAt(helixVector1);
    // targets.dhelix.push(object1);

    console.log(`Added object1 and object2 for index: ${index}`);
    console.log(targets.dhelix);
    

    // Second helix
    let object2 = new THREE.Object3D();
    object2.position.setFromCylindricalCoords(900, theta2, y);
    helixVector2.set(object2.position.x * 2, object2.position.y, object2.position.z * 2);
    object2.lookAt(helixVector2);
    // targets.dhelix.push(object2);
    targets.dhelix.push(object1, object2);
}

// function addGridObject(index) {

//     let object = new THREE.Object3D();
//     object.position.x = ((index % 5) * 400) - 800;
//     object.position.y = (-(Math.floor(index / 5) % 5) * 400) + 800;
//     object.position.z = (Math.floor(index / 25)) * 1000 - 2000;
//     targets.grid.push(object);

// }

function addGridObject(index, columns, rows) {

    let object = new THREE.Object3D();
    object.position.x = ((index % columns) * 400) - 800;
    object.position.y = (-(Math.floor(index / columns) % rows) * 400) + 800;
    object.position.z = (Math.floor(index / (columns * rows))) * 500 - 1000;
    targets.grid.push(object);

}


function transform(target, duration) {

    TWEEN.removeAll();

    for (let i = 0; i < targets.simple.length; i++) {
        let object = targets.simple[i];
        let targetObject = target[i];
        transformObjectPosition(object, targetObject, duration);
        transformObjectRotation(object, targetObject, duration);
    }

    new TWEEN.Tween(this)
        .to({}, duration * 2)
        .onUpdate(render)
        .start();

}

function transformObjectPosition(object, targetObject, duration) {

    new TWEEN.Tween(object.position)
        .to({
            x: targetObject.position.x,
            y: targetObject.position.y,
            z: targetObject.position.z
        }, Math.random() * duration + duration)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

}

function transformObjectRotation(object, targetObject, duration) {

    new TWEEN.Tween(object.rotation)
        .to({
            x: targetObject.rotation.x,
            y: targetObject.rotation.y,
            z: targetObject.rotation.z
        }, Math.random() * duration + duration)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();

}

function render() {

    renderer.render(scene, camera);

}

function animate() {

    requestAnimationFrame(animate);
    TWEEN.update();
    controls.update();
    composer.render();
}