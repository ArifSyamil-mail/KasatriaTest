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


// FORMAT :"CN", "https://static.kasatria.com/pivot-img/photo/019.jpg", "Lee Siew Suan", "Writing", 1, 251260.80,

const table = [
    "CN", "https://static.kasatria.com/pivot-img/photo/019.jpg", "Lee Siew Suan", "Writing", 25, 251260.80,
    "CN", "https://static.kasatria.com/pivot-img/photo/020.jpg", "New Yee Chian", "Cooking", 23, 60393.60,
    "CN", "https://static.kasatria.com/pivot-img/photo/021.jpg", "Wong Thiam Fook", "Traveling", 30, 212140.80,
    "MY", "https://static.kasatria.com/pivot-img/photo/022.jpg", "Norsuzilawati Mohd Noor", "Painting", 30, 208228.80,
    "MY", "https://static.kasatria.com/pivot-img/photo/023.jpg", "Norzainah Omar", "Hiking", 30, 106555.20,
    "IN", "https://static.kasatria.com/pivot-img/photo/024.jpg", "Meghandran Nathy", "Cooking", 31, 139080.00,
    "IN", "https://static.kasatria.com/pivot-img/photo/025.jpg", "Joyshree Goswami", "Painting", 35, 192278.40,
    "IN", "https://static.kasatria.com/pivot-img/photo/026.jpg", "Geetha Maniam", "Cooking", 27, 90864.00,
    "MY", "https://static.kasatria.com/pivot-img/photo/027.jpg", "Abdul Rahim Osman", "Cooking", 30, 141859.20,
    "IN", "https://static.kasatria.com/pivot-img/photo/028.jpg", "Prem Anand Raj", "Gardening", 44, 196113.60,
    "IN", "https://static.kasatria.com/pivot-img/photo/029.jpg", "Piara Singh Sarwan Singh", "Writing", 34, 207960.00,
    "MY", "https://static.kasatria.com/pivot-img/photo/030.jpg", "Othman b Abdul Rahman", "Gardening", 53, 193200.00,
    "IN", "https://static.kasatria.com/pivot-img/photo/031.jpg", "Sathiaseelan Paul Thurai", "Gardening", 59, 264456.00, 
    "MY", "https://static.kasatria.com/pivot-img/photo/MY0014.jpg", "Abdul Farid Alias", "Writing", 36, 146592.00, 
    "MY", "https://static.kasatria.com/pivot-img/photo/MY0010.jpg", "Abu Hassan Assari Ibrahim", "Gardening", 43, 213657.60,
    "MY", "https://static.kasatria.com/pivot-img/photo/MY_003.jpg", "Faridah Ahmad Iskandar", "Writing", 31, 271516.80,
    "MY", "https://static.kasatria.com/pivot-img/photo/MY0009.jpg", "Muzaffar Hisham", "Cooking", 35, 230980.80, 
    "US", "https://static.kasatria.com/pivot-img/photo/CA0088.jpg", "Isaac Cardinal", "Gardening", 49, 259252.80, 
    "IN", "https://static.kasatria.com/pivot-img/photo/IND_021.jpg", "Prabunathan A/L Gopal", "Writing", 29, 271670.40, 
    "MY", "https://static.kasatria.com/pivot-img/photo/MY0012.jpg", "Taswin Zakaria", "Gardening", 41, 243840.00,
    "US", "https://static.kasatria.com/pivot-img/photo/039.jpg", "Crystal Carter", "Cooking", 35, 211550.40,
    "CN", "https://static.kasatria.com/pivot-img/photo/040.jpg", "Vivian Grapentine", "Writing", 36, 149361.60, 
    "US", "https://static.kasatria.com/pivot-img/photo/041.jpg", "Joey De Leion", "Hiking", 35, 60974.40, 
    "US", "https://static.kasatria.com/pivot-img/photo/042.jpg", "Mark Feehily", "Cooking", 30, 125496.00, 
    "CN", "https://static.kasatria.com/pivot-img/photo/114.jpg", "Cheong Choong Kong", "Painting", 25, 111412.80, 
    "CN", "https://static.kasatria.com/pivot-img/photo/115.jpg", "George Lee Lap Wah", "Painting", 31, 146174.40, 
    "CN", "https://static.kasatria.com/pivot-img/photo/116.jpg", "Yong Mei Theng", "Writing", 28, 187896.00,
    "CN", "https://static.kasatria.com/pivot-img/photo/117.jpg", "Tang Zhee Kim", "Painting", 24, 264355.20, 
    "CN", "https://static.kasatria.com/pivot-img/photo/118.jpg", "Tan Miaw Wei", "Cooking", 25, 101841.60, 
    "CN", "https://static.kasatria.com/pivot-img/photo/119.jpg", "Cheng Ming Soon", "Traveling", 18, 210835.20, 
    "CN", "https://static.kasatria.com/pivot-img/photo/120.jpg", "Lee Fong Fong", "Painting", 25, 193017.60, 
    "MY", "https://static.kasatria.com/pivot-img/photo/121.jpg", "Amir Amran Karim", "Cooking", 29, 147600.00, 
    "IN", "https://static.kasatria.com/pivot-img/photo/122.jpg", "Krishnan CK Menon", "Cooking", 25, 207355.20, 
    "IN", "https://static.kasatria.com/pivot-img/photo/IND_041.jpg", "Aishwarya Rai", "Hiking", 32, 186398.40, 
    "IN", "https://static.kasatria.com/pivot-img/photo/124.jpg", "Simone Kumar Gopalan", "Hiking", 36, 327057.60,
    "MY", "https://static.kasatria.com/pivot-img/photo/125.jpg", "Maimoonah Hussain", "Cooking", 27, 181228.80, 
    "IN", "https://static.kasatria.com/pivot-img/photo/126.jpg", "Chanda Kochar", "Hiking", 30, 133228.80, 
    "IN", "https://static.kasatria.com/pivot-img/photo/127.jpg", "Shyamala Gopinath", "Traveling", 20, 267230.40, 
    "IN", "https://static.kasatria.com/pivot-img/photo/128.jpg", "Suren Zedek", "Writing", 35, 89764.80, 
    "IN", "https://static.kasatria.com/pivot-img/photo/129.jpg", "Danial Kuilan", "Writing", 35, 246686.40, 
    "IN", "https://static.kasatria.com/pivot-img/photo/130.jpg", "Levi Asher Anamalai", "Traveling", 19, 170260.80, 
    "US", "https://static.kasatria.com/pivot-img/photo/131.jpg", "Tristan Martin", "Gardening", 52, 181555.20, 
    "US", "https://static.kasatria.com/pivot-img/photo/CA0294.jpg", "David Conner", "Gardening", 55, 282019.20, 
    "US", "https://static.kasatria.com/pivot-img/photo/CA0285.jpg", "Kerry Jen Katona", "Gardening", 43, 250579.20, 
    "US", "https://static.kasatria.com/pivot-img/photo/134.jpg", "Gilbert Kohnke", "Gardening", 55, 344318.40,
    "US", "https://static.kasatria.com/pivot-img/photo/135.jpg", "Spencer Murray", "Gardening", 52, 240638.40, 
    "MY", "https://static.kasatria.com/pivot-img/photo/136.jpg", "Yaacob Mohd Zain", "Hiking", 24, 205372.80, 
    "MY", "https://static.kasatria.com/pivot-img/photo/137.jpg", "Hatini Mat Husin", "Hiking", 28, 350774.40, 
    "MY", "https://static.kasatria.com/pivot-img/photo/138.jpg", "Ariffin Alias", "Writing", 28, 241670.40, 
    "MY", "https://static.kasatria.com/pivot-img/photo/139.jpg", "Abdul Malik A Rahman", "Gardening", 42, 197779.20,
    "MY", "https://static.kasatria.com/pivot-img/photo/140.jpg", "Samad Mahid Zain", "Hiking", 30, 245827.20, 
    "MY", "https://static.kasatria.com/pivot-img/photo/141.jpg", "Johan Hashim", "Cooking", 34, 184915.20, 
    "MY", "https://static.kasatria.com/pivot-img/photo/142.jpg", "Samsiah Zainal", "Painting", 28, 259180.80, 
    "CN", "https://static.kasatria.com/pivot-img/photo/009.jpg", "Tay Eng Yaw", "Cooking", 27, 188457.60, 
    "CN", "https://static.kasatria.com/pivot-img/photo/010.jpg", "Cynthiea Hong Pei Min", "Painting", 22, 164865.60, 
    "CN", "https://static.kasatria.com/pivot-img/photo/011.jpg", "Lim Yong Siang", "Gardening", 40, 347481.60,
    "MY", "https://static.kasatria.com/pivot-img/photo/018.jpg", "Mohd Azam Mohd Bakar", "Cooking", 38, 166795.20, 
    "IN", "https://static.kasatria.com/pivot-img/photo/043.jpg", "Jagathesan Shanmugam", "Gardening", 43, 97075.20, 
    "IN", "https://static.kasatria.com/pivot-img/photo/044.jpg", "Christiana Tharsis", "Hiking", 35, 243014.40, 
    "IN", "https://static.kasatria.com/pivot-img/photo/045.jpg", "Amutha Rakwan", "Gardening", 46, 100396.80,
    "MY", "https://static.kasatria.com/pivot-img/photo/046.jpg", "Wan Rosmawati Wan Ibrahim", "Cooking", 34, 191616.00, 
    "MY", "https://static.kasatria.com/pivot-img/photo/047.jpg", "Khatimah Mahadi", "Painting", 29, 265171.20, 
    "MY", "https://static.kasatria.com/pivot-img/photo/048.jpg", "Nor Rozita Nordin", "Painting", 32, 246158.40, 
    "MY", "https://static.kasatria.com/pivot-img/photo/049.jpg", "Abdul Aziz Man", "Cooking", 32, 312158.40, 
    "MY", "https://static.kasatria.com/pivot-img/photo/050.jpg", "Nimma Safira Khalid", "Traveling", 19, 258384.00, 
    "CN", "https://static.kasatria.com/pivot-img/photo/012.jpg", "Lam Swee Kim", "Painting", 23, 148718.40, 
    "CN", "https://static.kasatria.com/pivot-img/photo/013.jpg", "Tai Yee Shian", "Painting", 34, 195206.40, 
    "CN", "https://static.kasatria.com/pivot-img/photo/014.jpg", "Euodia Ooi", "Writing", 27, 52118.40, 
    "CN", "https://static.kasatria.com/pivot-img/photo/015.jpg", "Ng Jia Nian", "Cooking", 24, 340464.00, 
    "CN", "https://static.kasatria.com/pivot-img/photo/016.jpg", "Ong Tze Jun", "Hiking", 36, 159739.20,
    "CN", "https://static.kasatria.com/pivot-img/photo/017.jpg", "Brian Choong Chee Keong", "Traveling", 21, 347659.20, 
    "MY", "https://static.kasatria.com/pivot-img/photo/086.jpg", "Shaharuddin Abg Mansor", "Gardening", 47, 351993.60, 
    "MY", "https://static.kasatria.com/pivot-img/photo/087.jpg", "Mohd Izani Ashari", "Traveling", 30, 230179.20, 
    "MY", "https://static.kasatria.com/pivot-img/photo/088.jpg", "Roshan Thiran", "Cooking", 26, 369652.80, 
    "MY", "https://static.kasatria.com/pivot-img/photo/089.jpg", "Shahazwan Harris", "Painting", 30, 364948.80,
    "MY", "https://static.kasatria.com/pivot-img/photo/090.jpg", "Saiful Dzulkifly", "Painting", 36, 360115.20, 
    "MY", "https://static.kasatria.com/pivot-img/photo/091.jpg", "Jamie Haniff Ramlee", "Gardening", 47, 174312.00, 
    "MY", "https://static.kasatria.com/pivot-img/photo/092.jpg", "Azim Azli", "Gardening", 50, 160252.80, 
    "MY", "https://static.kasatria.com/pivot-img/photo/093.jpg", "Zaida Khalida Shaari", "Cooking", 25, 163104.00, 
    "MY", "https://static.kasatria.com/pivot-img/photo/094.jpg", "Nurul Nabila Huda Che Ad", "Hiking", 39, 247579.20, 
    "MY", "https://static.kasatria.com/pivot-img/photo/095.jpg", "Sarimah Samad-Imran", "Painting", 29, 102580.80, 
    "MY", "https://static.kasatria.com/pivot-img/photo/096.jpg", "Wan Nur Nordiyana", "Cooking", 25, 264705.60, 
    "MY", "https://static.kasatria.com/pivot-img/photo/097.jpg", "Fatimah Husna", "Writing", 25, 72710.40, 
    "MY", "https://static.kasatria.com/pivot-img/photo/098.jpg", "Nurshafiqah Saad", "Cooking", 30, 128750.40, 
    "IN", "https://static.kasatria.com/pivot-img/photo/IND_005.jpg", "Amerjit Singh Bhag Singh", "Writing", 31, 205171.20,
    "MY", "https://static.kasatria.com/pivot-img/photo/100.jpg", "Nora Abd Manaf", "Writing", 29, 168096.00, 
    "CN", "https://static.kasatria.com/pivot-img/photo/101.jpg", "Walter Michael Chan", "Cooking", 29, 197083.20, 
    "CN", "https://static.kasatria.com/pivot-img/photo/102.jpg", "Teng Chean Choy", "Cooking", 32, 145862.40,
    "CN", "https://static.kasatria.com/pivot-img/photo/103.jpg", "Chua Bee Chin", "Painting", 23, 159883.20, 
    "IN", "https://static.kasatria.com/pivot-img/photo/155.jpg", "Santhanamary John", "Writing", 25, 135878.40, 
    "MY", "https://static.kasatria.com/pivot-img/photo/156.jpg", "Nor Arzlin Redzwan", "Gardening", 42, 66907.20, 
    "MY", "https://static.kasatria.com/pivot-img/photo/157.jpg", "Zuraidah Atan", "Cooking", 28, 104649.60, 
    "MY", "https://static.kasatria.com/pivot-img/photo/158.jpg", "Shahrul Izzan Abdul Karim", "Traveling", 29, 46363.20, 
    "MY", "https://static.kasatria.com/pivot-img/photo/m_047.jpg", "Putri Shireen Syed Othman", "Painting", 33, 96628.80, 
    "MY", "https://static.kasatria.com/pivot-img/photo/160.jpg", "Abdul Hadzi Marzuki", "Writing", 34, 117273.60, 
    "MY", "https://static.kasatria.com/pivot-img/photo/161.jpg", "Yasmin Ahmad", "Painting", 24, 58833.60, 
    "MY", "https://static.kasatria.com/pivot-img/photo/162.jpg", "Halipah Binti Esa", "Traveling", 29, 102676.80, 
    "MY", "https://static.kasatria.com/pivot-img/photo/163.jpg", "Habibah Abdul", "Painting", 37, 210993.60, 
    "MY", "https://static.kasatria.com/pivot-img/photo/164.jpg", "Zulkarnain Ahmad", "Writing", 34, 71361.60, 
    "MY", "https://static.kasatria.com/pivot-img/photo/165.jpg", "Fauziah Mohd Noor", "Painting", 24, 126532.80, 
    "MY", "https://static.kasatria.com/pivot-img/photo/196.jpg", "Mohd Yunus Idris", "Writing", 39, 143112.00, 
    "MY", "https://static.kasatria.com/pivot-img/photo/197.jpg", "Ahmad Jauhari Yahya", "Traveling", 21, 159422.40, 
    "MY", "https://static.kasatria.com/pivot-img/photo/198.jpg", "Saifol Bahri Mohamad Shamlan", "Writing", 34, 198936.00, 
    "MY", "https://static.kasatria.com/pivot-img/photo/199.jpg", "Isham Ishak", "Gardening", 40, 112598.40,  
    "MY", "https://static.kasatria.com/pivot-img/photo/200.jpg", "Mohd Hafizuddin Mansor", "Hiking", 34, 99624.00,
    "US", "https://static.kasatria.com/pivot-img/photo/CA0292.jpg", "Stuart Cardell", "Gardening", 44, 44140.80, 
    "US", "https://static.kasatria.com/pivot-img/photo/CA0237.jpg", "Abigail Wellington", "Painting", 33, 126201.60, 
    "CN", "https://static.kasatria.com/pivot-img/photo/c_035.jpg", "Gino Chin", "Cooking", 33, 178569.60, 
    "CN", "https://static.kasatria.com/pivot-img/photo/c_016.jpg", "Meon Khor", "Writing", 37, 132936.00, 
    "CN", "https://static.kasatria.com/pivot-img/photo/c_013.jpg", "Lim Joo ann", "Writing", 30, 183110.40,
    "CN", "https://static.kasatria.com/pivot-img/photo/CN_038.jpg", "Yong Hai Wen", "Traveling", 19, 259123.20,
    "CN", "https://static.kasatria.com/pivot-img/photo/CN_024.jpg", "Yuki Low Mei Shan", "Hiking", 28, 191016.00, 
    "CN", "https://static.kasatria.com/pivot-img/photo/J_013.jpg", "Jessica Tee Yan Lai", "Hiking", 36, 152433.60, 
    "CN", "https://static.kasatria.com/pivot-img/photo/J_003.jpg", "Sam Yam", "Cooking", 29, 57499.20,
    "IN", "https://static.kasatria.com/pivot-img/photo/IND_057.jpg", "Shanker Jorrama", "Writing", 36, 220142.40, 
    "IN", "https://static.kasatria.com/pivot-img/photo/IND_010.jpg", "Vick Viknes", "Painting", 21, 267307.20, 
    "IN", "https://static.kasatria.com/pivot-img/photo/IND_035.jpg", "Arul Krishnan", "Hiking", 35, 69883.20,
    "IN", "https://static.kasatria.com/pivot-img/photo/IND_014.jpg", "Shamini Mohanan", "Writing", 28, 363681.60, 
    "US", "https://static.kasatria.com/pivot-img/photo/o_009.jpg", "Theodore Frazer", "Gardening", 49, 361166.40, 
    "IN", "https://static.kasatria.com/pivot-img/photo/IND_028.jpg",  "Aju Varghese", "Gardening", 43, 324686.40, 
    "IN", "https://static.kasatria.com/pivot-img/photo/IND_032.jpg", "Shahrukh Khan", "Gardening", 40, 287155.20, 
    "IN", "https://static.kasatria.com/pivot-img/photo/IND_040.jpg", "Prithviraj Sukumaran", "Gardening", 50, 363739.20, 
    "US", "https://static.kasatria.com/pivot-img/photo/CA0134.jpg",  "Sarah Miller", "Painting", 32, 101832.00,
    "IN", "https://static.kasatria.com/pivot-img/photo/IND_016.jpg",  "Monali Thakur", "Painting", 29, 162710.40,
    "IN", "https://static.kasatria.com/pivot-img/photo/IND_044.jpg", "Keerubalami Ponnudi", "Writing", 36, 177052.80, 
    "IN", "https://static.kasatria.com/pivot-img/photo/i_023.jpg",  "Saint Sahana", "Hiking", 37, 314136.00,
    "MY", "https://static.kasatria.com/pivot-img/photo/m_020.jpg",  "Munish Thabur", "Hiking", 28, 171758.40,
    "IN", "https://static.kasatria.com/pivot-img/photo/IND_011.jpg", "Yogesh Balakrishnamur", "Painting", 21, 238915.20, 
    "IN", "https://static.kasatria.com/pivot-img/photo/IND_049.jpg", "Sharmilla Mogan", "Traveling", 19, 173740.80,
    "IN", "https://static.kasatria.com/pivot-img/photo/IND_045.jpg", "Janesree Gunasegern", "Painting", 32, 187512.00, 
    "IN", "https://static.kasatria.com/pivot-img/photo/i_018.jpg", "Preya Nadarasa", "Cooking", 26, 247233.60, 
    "IN", "https://static.kasatria.com/pivot-img/photo/i_028.jpg", "Uma Shamini", "Cooking", 24, 201451.20, 
    "IN", "https://static.kasatria.com/pivot-img/photo/IND_053.jpg", "Geetha Kumar", "Traveling", 18, 164433.60, 
    "IN", "https://static.kasatria.com/pivot-img/photo/IND_031.jpg", "Jeeva Rajadran", "Cooking", 38, 192969.60,
    "IN", "https://static.kasatria.com/pivot-img/photo/IND_008.jpg", "Nadaraajan Perumal", "Writing", 25, 165604.80, 
    "IN", "https://static.kasatria.com/pivot-img/photo/IND_039.jpg", "Shri Gobaradhan", "Writing", 39, 218740.80, 
    "IN", "https://static.kasatria.com/pivot-img/photo/IND_034.jpg", "Satees Muniady", "Gardening", 44, 191673.60, 
    "MY", "https://static.kasatria.com/pivot-img/photo/m_190.jpg", "Nur Syazwani Nabilah Ibrahim", "Painting", 33, 210110.40,
    "IN", "https://static.kasatria.com/pivot-img/photo/IND_042.jpg", "Geetha Davethas", "Hiking", 24, 199689.60,
    "US", "https://static.kasatria.com/pivot-img/photo/G_027.jpg", "Pricella Ance", "Cooking", 34, 141801.60, 
    "IN", "https://static.kasatria.com/pivot-img/photo/i_013.jpg", "Kumarran Thanrayan", "Cooking", 28, 128222.40, 
    "IN", "https://static.kasatria.com/pivot-img/photo/i_002.jpg", "Tineswary Pannaparon", "Painting", 21, 94281.60, 
    "IN", "https://static.kasatria.com/pivot-img/photo/IND_015.jpg", "Vinothyni Anannthi", "Painting", 22, 357902.40, 
    "IN", "https://static.kasatria.com/pivot-img/photo/IND_013.jpg", "Pilva Bhatia", "Painting", 29, 213988.80,
    "MY", "https://static.kasatria.com/pivot-img/photo/m_027.jpg", "Wan Nahijah Mohamad", "Painting", 24, 183710.40, 
    "MY", "https://static.kasatria.com/pivot-img/photo/m_066.jpg", "Rahimi Muhamad", "Writing", 30, 191452.80, 
    "MY", "https://static.kasatria.com/pivot-img/photo/m_090.jpg", "Shuhada Shahira", "Traveling", 19, 258057.60, 
    "MY", "https://static.kasatria.com/pivot-img/photo/mus_202.jpg", "Yana Husin", "Gardening", 49, 129523.20, 
    "MY", "https://static.kasatria.com/pivot-img/photo/mus_163.jpg", "Yusri Shafie", "Hiking", 28, 166843.20,
    "MY", "https://static.kasatria.com/pivot-img/photo/mus_166.jpg", "Nurul Shafiza Mat Isa", "Painting", 32, 257068.80,  
    "MY", "https://static.kasatria.com/pivot-img/photo/mus_194.jpg", "Aidan Ohara", "Hiking", 27, 260635.20, 
    "US", "https://static.kasatria.com/pivot-img/photo/CA0128.jpg", "Ella Berry", "Cooking", 35, 131736.00, 
    "MY", "https://static.kasatria.com/pivot-img/photo/mus_178.jpg", "Noor Atheerah Zulkipli", "Cooking", 31, 154046.40, 
    "MY", "https://static.kasatria.com/pivot-img/photo/m_185.jpg", "Ikmal Zakaria", "Painting", 32, 197380.80,
    "MY", "https://static.kasatria.com/pivot-img/photo/p_047.jpg", "Syed Azuwan Syed Helmi", "Writing", 34, 163905.60, 
    "MY", "https://static.kasatria.com/pivot-img/photo/m_187.jpg", "Haziq Zamri", "Painting", 27, 99048.00, 
    "MY", "https://static.kasatria.com/pivot-img/photo/mus_056.jpg", "Nor Fazila", "Cooking", 29, 189384.00, 
    "MY", "https://static.kasatria.com/pivot-img/photo/m_116.jpg", "Muhd Ruzhan", "Traveling", 28, 232641.60, 
    "MY", "https://static.kasatria.com/pivot-img/photo/m_154.jpg", "Azhar Masli", "Writing", 29, 212256.00,
    "MY", "https://static.kasatria.com/pivot-img/photo/m_120.jpg", "Mohd Riduan Hamin", "Gardening", 40, 235483.20, 
    "US", "https://static.kasatria.com/pivot-img/photo/CA0274.jpg", "Freya Rogers", "Painting", 30, 240427.20,
    "MY", "https://static.kasatria.com/pivot-img/photo/m_181.jpg", "Harris Azman", "Hiking", 38, 232377.60, 
    "MY", "https://static.kasatria.com/pivot-img/photo/th_337.jpg", "Muhammad Adli Azri", "Painting", 24, 280248.00, 
    "MY", "https://static.kasatria.com/pivot-img/photo/m_177.jpg", "Jafri Mohd", "Hiking", 29, 314107.20,
    "MY", "https://static.kasatria.com/pivot-img/photo/mus_019.jpg", "Aten Zulkifly", "Writing", 30, 237307.20,
    "MY", "https://static.kasatria.com/pivot-img/photo/mus_045.jpg", "Eyqa Hassan", "Painting", 25, 112651.20,
    "MY", "https://static.kasatria.com/pivot-img/photo/m_018.jpg", "Muhd Yazid", "Hiking", 30, 76492.80, 
    "MY", "https://static.kasatria.com/pivot-img/photo/p_027.jpg", "Muhammad Syafiq Suhaimi", "Writing", 39, 341563.20, 
    "MY", "https://static.kasatria.com/pivot-img/photo/p_014.jpg", "Nashrul Amin", "Gardening", 62, 154632.00,
    "MY", "https://static.kasatria.com/pivot-img/photo/mus_064.jpg", "Nur Syahirah", "Painting", 21, 148492.80,
    "MY", "https://static.kasatria.com/pivot-img/photo/mus_114.jpg", "Syamimy Ghani", "Traveling", 20, 200347.20, 
    "MY", "https://static.kasatria.com/pivot-img/photo/p_028.jpg", "Shahir Sukri", "Painting", 34, 282700.80, 
    "MY", "https://static.kasatria.com/pivot-img/photo/p_030.jpg", "Amierul Miyul", "Gardening", 48, 321004.80, 
    "MY", "https://static.kasatria.com/pivot-img/photo/mus_090.jpg", "Nara Sharkirra", "Writing", 23, 338539.20,
    "MY", "https://static.kasatria.com/pivot-img/photo/p_022.jpg", "Muhamad Hafiz Bob", "Gardening", 59, 240312.00, 
    "MY", "https://static.kasatria.com/pivot-img/photo/p_023.jpg", "Mohd Shahril", "Gardening", 48, 252984.00, 
    "MY", "https://static.kasatria.com/pivot-img/photo/mus_091.jpg", "Eyka Abdul Ghani", "Traveling", 23, 233726.40,
    "MY", "https://static.kasatria.com/pivot-img/photo/m_167.jpg", "Mohamad Khuzairy", "Cooking", 33, 118766.40, 
    "MY", "https://static.kasatria.com/pivot-img/photo/m_179.jpg",  "Nana Hanna", "Traveling", 20, 226276.80,
    "MY", "https://static.kasatria.com/pivot-img/photo/p_034.jpg", "Mohd Hanafi Azhar", "Gardening", 62, 332568.00,
    "MY", "https://static.kasatria.com/pivot-img/photo/p_045.jpg", "Zenki Afra", "Gardening", 60, 168600.00, 
    "MY", "https://static.kasatria.com/pivot-img/photo/p_050.jpg", "Mohamad Hairie", "Gardening", 48, 300566.40, 
    "MY", "https://static.kasatria.com/pivot-img/photo/m_168.jpg", "Mohd Syafiq", "Gardening", 57, 215164.80, 
    "MY", "https://static.kasatria.com/pivot-img/photo/m_165.jpg", "Muhammad Ashri", "Traveling", 27, 206568.00,
    "MY", "https://static.kasatria.com/pivot-img/photo/mus_024.jpg", "Yusni Asnida", "Traveling", 20, 167016.00,
    "MY", "https://static.kasatria.com/pivot-img/photo/m_049.jpg", "Shaheera Mohd Aniq", "Traveling", 19, 248865.60, 
    "MY", "https://static.kasatria.com/pivot-img/photo/m_103.jpg", "Nursyamimi Atiqah", "Cooking", 27, 288734.40, 
    "US", "https://static.kasatria.com/pivot-img/photo/G_038.jpg", "Catherine Wheeler", "Hiking", 23, 53697.60, 
    "MY", "https://static.kasatria.com/pivot-img/photo/m_110.jpg", "Azizah Mahzan", "Hiking", 28, 210508.80,
    "MY", "https://static.kasatria.com/pivot-img/photo/m_149.jpg", "Mohd Azmi", "Traveling", 30, 212006.40,
    "US", "https://static.kasatria.com/pivot-img/photo/G_035.jpg", "Anastasia Morrison", "Hiking", 33, 71625.60, 
    "MY", "https://static.kasatria.com/pivot-img/photo/ph_151.jpg", "Razak Muhaidin", "Gardening", 40, 259934.40, 
    "US", "https://static.kasatria.com/pivot-img/photo/o_014.jpg", "Helena Tillsley", "Gardening", 45, 192369.60, 
    "US", "https://static.kasatria.com/pivot-img/photo/G_057.jpg", "Ryder Fletcher", "Gardening", 50, 257323.20, 
    "US", "https://static.kasatria.com/pivot-img/photo/G_058.jpg", "Sara Fessenden", "Writing", 38, 145972.80, 
    "CN", "https://static.kasatria.com/pivot-img/photo/J_011.jpg", "Jeffrey Ewing", "Gardening", 49, 254068.80, 
    "US", "https://static.kasatria.com/pivot-img/photo/CA0162.jpg", "Dawson Hoffman", "Cooking", 38, 181804.80, 
    "US", "https://static.kasatria.com/pivot-img/photo/G_052.jpg", "Jonne Macdonald", "Hiking", 36, 212760.00, 
    "US", "https://static.kasatria.com/pivot-img/photo/CA0267.jpg", "Pierre Henry", "Gardening", 52, 127704.00,
    "US", "https://static.kasatria.com/pivot-img/photo/G_039.jpg", "Collen McClintock", "Gardening", 51, 261883.20 
    
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
//Change to 6
    for (let i = 0; i < table.length; i += 6) {

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

    // let group = table[(i + 4)];
    // element.style.backgroundColor = getBackgroundColor(group);

    // Set the background color based on the group
    let networth = table[(i + 5)];
    element.style.backgroundColor = getBackgroundColor(networth);

    let number = document.createElement('div');
    number.className = 'number';
    // number.textContent = (i / 5) + 1;
    number.textContent = table[i + 4];
    element.appendChild(number);

    let country = document.createElement('div');
    country.className = 'country';
    country.textContent = table[i];
    element.appendChild(country);


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

//     let amount = parseFloat(networth.replace(/[$,]/g, ''));
//     if (amount <= 100000) {
//         return '#BF3022'; // Most left networth
//     } else if (amount >= 100001 && amount <= 200000) {
//         return '#FDCA35'; // Middle networth
//     } else if (amount >= 200001) {
//         return '#3A9F48'; // Most right networth
//     } 
// }

function getBackgroundColor(networth) {

    // const amount = parseFloat(networth.replace(/[$,]/g, ''));
    if (networth <= 100000) {
        return '#BF3022'; // Most left networth
    } else if (networth >= 100001 && networth <= 200000) {
        return '#FDCA35'; // Middle networth
    } else if (networth >= 200001) {
        return '#3A9F48'; // Most right networth
    } 
}

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
    const COLS = 120;
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
        addGridObject(i, 5, 4);
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