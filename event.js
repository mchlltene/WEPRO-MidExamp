//SHOW AND HIDE BUTTON
const btnDisplay = document.querySelector('#showHideButton');
const formStudent = document.querySelector('form')

btnDisplay.addEventListener('click', function(){
    if(formStudent.style.display== 'none'){
        formStudent.style.display ='block';
        btnDisplay.textContent='Hide From Add Student';
    } else {
        formStudent.style.display = 'none';
        btnDisplay.textContent='Show From Add Student';
    }
});

//BUTTON UNTUK SUBMIT DATA
const btnAdd = document.querySelector('#submitButton')
btnAdd.addEventListener('click', function(){
    console.log('Button Click');
});

//PRODI FILTER BY FACULLTY IN FORM
const facultyProdi = document.querySelector('#faculty');
facultyProdi.addEventListener('click',function(){
    console.log(faculty.value);

    let prodi=document.querySelector('#programStudy');
    if (faculty.value == 'Pascasarjana'){
        //Create elemen for Magister 
        let prodiOption1 = document.createElement('option');
        let optionText1 = document.createTextNode('Magister Management');
        prodiOption1.appendChild(optionText1);
        prodi.appendChild(prodiOption1);

        let prodiOption2 = document.createElement('option');
        let optionText2 = document.createTextNode('Magister Teologi');
        prodiOption2.appendChild(optionText2);
        prodi.appendChild(prodiOption2);
    }

    else if(faculty.value == 'Fakultas Keguruan dan Ilmu Pendidikan'){
        //create element pendidikan agama
        let prodiOption1 = document.createElement('option');
        let optionText1 = document.createTextNode('Pendidikan Agama');
        prodiOption1.appendChild(optionText1);
        prodi.appendChild(prodiOption1);

        //create elemen pendidikan bahasa inggris
        let prodiOption2 = document.createElement('option');
        let optionText2 = document.createTextNode('Pendidikan Bahasa Inggris');
        prodiOption2.appendChild(optionText2);
        prodi.appendChild(prodiOption2);

        //create elemen pendidikan Ekonomi
        let prodiOption3 = document.createElement('option');
        let optionText3 = document.createTextNode('Pendidikan Ekonomi');
        prodiOption3.appendChild(optionText3);
        prodi.appendChild(prodiOption3);

        //create elemen pendidikan Ekonomi
        let prodiOption4 = document.createElement('option');
        let optionText4 = document.createTextNode('Pendidikan Luar Sekolah');
        prodiOption4.appendChild(optionText4);
        prodi.appendChild(prodiOption4);
    }

    else if(faculty.value == 'Fakultas Ekonomi dan Bisnis'){
        //create element pendidikan Manajement
        let prodiOption1 = document.createElement('option');
        let optionText1 = document.createTextNode('Manajement');
        prodiOption1.appendChild(optionText1);
        prodi.appendChild(prodiOption1);

        //create elemen pendidikan bahasa Akuntansi
        let prodiOption2 = document.createElement('option');
        let optionText2 = document.createTextNode('Akuntansi');
        prodiOption2.appendChild(optionText2);
        prodi.appendChild(prodiOption2);
    }
    else if(faculty.value == 'Fakultas Pertanian'){
        //create element pendidikan Agroteknolog
        let prodiOption1 = document.createElement('option');
        let optionText1 = document.createTextNode('Agroteknologi');
        prodiOption1.appendChild(optionText1);
        prodi.appendChild(prodiOption1);
    }

    else if(faculty.value == 'Fakultas Ilmu Komputer'){
        //create element pendidikan Informatika
        let prodiOption1 = document.createElement('option');
        let optionText1 = document.createTextNode('Informatika');
        prodiOption1.appendChild(optionText1);
        prodi.appendChild(prodiOption1);

        //create elemen pendidikan bahasa Sistem Informasi
        let prodiOption2 = document.createElement('option');
        let optionText2 = document.createTextNode('Sistem Informasi');
        prodiOption2.appendChild(optionText2);
        prodi.appendChild(prodiOption2);
    }

    else if(faculty.value == 'Fakultas Keperawatan'){
        //create element pendidikan Profesi Ners
        let prodiOption1 = document.createElement('option');
        let optionText1 = document.createTextNode('Profesi Nurse');
        prodiOption1.appendChild(optionText1);
        prodi.appendChild(prodiOption1);

        //create elemen pendidikan bahasa Keperawatan
        let prodiOption2 = document.createElement('option');
        let optionText2 = document.createTextNode('Keperawatan');
        prodiOption2.appendChild(optionText2);
        prodi.appendChild(prodiOption2);
    }
    else if (faculty.value == 'Fakultas Filsafat'){
        //create element pendidikan ilmu filsafat
        let prodiOption1 = document.createElement('option');
        let optionText1 = document.createTextNode('Ilmu Filsafat');
        prodiOption1.appendChild(optionText1);
        prodi.appendChild(prodiOption1);
    }
    else if (faculty.value == 'Akademi Sekrtari Manajemen Indonesia Klabat'){
        //create element pendidikan ilmu filsafat
        let prodiOption1 = document.createElement('option');
        let optionText1 = document.createTextNode('Sekretari (D3)');
        prodiOption1.appendChild(optionText1);
        prodi.appendChild(prodiOption1);
    }


})

//BOTTON FORM ADD STUDENT
formStudent.addEventListener('submit',function(e){
    e.preventDefault(); // mencegah agarh data tidak ke server
    
    let studentNim = document.querySelector('#student-nim');  //menangkap inputan NIM
    let studentName =document.querySelector('#student-name');  // menangkap inputan Nama
    let studentGender =document.getElementsByClassName('form-check-input');  // Menangkap inputan Gender 
    let resultGender;
    for (i=0; i<2; i++){
        if (studentGender[0].checked){
            resultGender= document.querySelector('#student-male');
        }
        else if (studentGender[1].checked){
            resultGender= document.querySelector('#student-female');
        }
    }
    let faculty= document.querySelector('#faculty');  //mengambil nilai faculty
    let option = faculty.options[faculty.selectedIndex];
    let prodi = document.querySelector('#programStudy')
    let optionProdi = prodi.options[prodi.selectedIndex];
    
    let icon = document.querySelector('#icon');


    //Create row
    const tr = document.createElement('tr');
    tr.className="displayData";

    //1. create student nim td element
    const td1 = document.createElement('td');                 
    const tdText1 = document.createTextNode(studentNim.value);
    td1. appendChild(tdText1);

    //2.  create student name td element
    const td2 = document.createElement('td');                 
    const tdText2 = document.createTextNode(studentName.value);
    td2. appendChild(tdText2);

    //3. create student gender td element
    const td3 = document.createElement('td');                 
    const tdText3 = document.createTextNode(resultGender.value);
    td3. appendChild(tdText3);

     //4. create student faculty td element
     const td4 = document.createElement('td');                 
     const tdText4 = document.createTextNode(option.value);
     td4. appendChild(tdText4);

      //4. create student prpgram study td element
      const td5 = document.createElement('td');                 
      const tdText5 = document.createTextNode(optionProdi.value);
      td5. appendChild(tdText5);

      //5. create student trash icon td element
      const td6 = document.createElement('td');                 
      const tdText6 = document.createTextNode(icon.textContent);
      td6. appendChild(tdText6);
 

    
    const table = document.querySelector('#table');
    table.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    // console.log(` ${studentNim.value} / ${studentName.value} / ${resultGender.value} / ${option.value} ${optionProdi.value}`); 
    
    //Validation
    if (!studentNim.value || !studentName.value || !studentGender ){
        alert('complete the form');
    }
});

//SEARCH BOX
const search = document.querySelector('#searchBox');
search.addEventListener('keyup',function(event){
    let searchText = event.target.value.toLowerCase();

    let listOfStudent = [...document.querySelectorAll('tr')]; //spread operator
    console.log(listOfStudent);
    
    listOfStudent.forEach((student) => {
        let studentData = student.firstElementChild.textContent;
        console.log(studentData);

        if(studentData.toLowerCase().indexOf(searchText) != -1){
            student.style.display ='block';
        } else {
            student.style.display='none';
        }
        console.log(student.style.display);
    });
});

// Delete
// const removeData = document.querySelector('#displayData');
// removeData.addEventListener('click', function(event){
//     if(event.target.classList.contains('delete')){
//         const tr = event.target.parentElement;
//         removeData.removeChild(td);
//     }
// })


// FILTER BY FACULTY
const filterFaculty = document.querySelector('#filterFaculty');
filterFaculty.addEventListener('click', function(e){
    let facultyText= e.target.value.toLowerCase();

    let listOfStudent = [...document.querySelectorAll('td')]; //spread operator
    console.log(listOfStudent);
    
    listOfStudent.forEach((student) => {
        let studentData = student.firstChild.textContent;
        console.log(studentData);

        if(studentData.toLowerCase().indexOf(facultyText) != -1){
            student.style.display ='block';
        } else {
            student.style.display='none';
        }
        console.log(student.style.display);
    });
});

// FILTER STUDENT BY FACULTY
const filterProdi = document.querySelector('#filterProdi');
filterProdi.addEventListener('click', function(e){
    let prodiText= e.target.value.toLowerCase();

    let listOfStudent = [...document.querySelectorAll('tr')]; //spread operator
    console.log(listOfStudent);
    
    listOfStudent.forEach((student) => {
        let studentData = student.firstChild.textContent;
        console.log(studentData);

        if(studentData.toLowerCase().indexOf(prodiText) != -1){
            student.style.display ='block';
        } else {
            student.style.display='none';
        }
        console.log(student.style.display);
    });
});



