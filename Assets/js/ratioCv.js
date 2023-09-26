console.log('Ratio CV')
// Step 1 
const ratioImgProfileCvOne = document.querySelector('.posting-cv .imgProfileCv-1')
const ratioImgProfileCvTwo = document.querySelector('.posting-cv .imgProfileCv-2')
const otherImgProfileCv = document.querySelector('.posting-cv .other-img-profile-cv')
ratioImgProfileCvOne.addEventListener('click', (e) => {
    e.preventDefault();
    ratioImgProfileCvTwo.children[0].style.background = '#fff'
    ratioImgProfileCvOne.children[0].style.background = colorPrimaryLight
    ratioImgProfileCvTwo.children[1].style.fontWeight = 'normal'
    ratioImgProfileCvOne.children[0].style.background = 'bold'
    otherImgProfileCv.style.display = 'none'
})
ratioImgProfileCvTwo.addEventListener('click', (e) => {
    e.preventDefault();
    ratioImgProfileCvTwo.children[0].style.background = colorPrimaryLight
    ratioImgProfileCvOne.children[0].style.background = '#fff'
    ratioImgProfileCvTwo.children[1].style.fontWeight = 'bold'
    ratioImgProfileCvOne.children[0].style.background = 'normal'
    otherImgProfileCv.style.display = 'block'
})
// Minusvalia
const ratioMinusvaliaOne = document.querySelector('.posting-cv .minusvalia-1')
const ratioMinusvaliaTwo = document.querySelector('.posting-cv .minusvalia-2')
const yesMinusvalia = document.querySelector('.posting-cv .yes-minusvalia')
ratioMinusvaliaOne.addEventListener('click', (e) => {
    e.preventDefault();
    ratioMinusvaliaTwo.children[0].style.background = '#fff'
    ratioMinusvaliaOne.children[0].style.background = colorPrimaryLight
    ratioMinusvaliaTwo.children[1].style.fontWeight = 'normal'
    ratioMinusvaliaOne.children[0].style.background = 'bold'
    yesMinusvalia.style.display = 'none'
})
ratioMinusvaliaTwo.addEventListener('click', (e) => {
    e.preventDefault();
    ratioMinusvaliaTwo.children[0].style.background = colorPrimaryLight
    ratioMinusvaliaOne.children[0].style.background = '#fff'
    ratioMinusvaliaTwo.children[1].style.fontWeight = 'bold'
    ratioMinusvaliaOne.children[0].style.background = 'normal'
    yesMinusvalia.style.display = 'block'
})
// Dependients
const ratioDependientsOne = document.querySelector('.posting-cv .dependients-1')
const ratioDependientsTwo = document.querySelector('.posting-cv .dependients-2')
const yesDependients = document.querySelector('.posting-cv .yes-dependients')
ratioDependientsOne.children[0].style.background = colorPrimaryLight
ratioDependientsOne.children[0].style.background = 'bold'
ratioDependientsOne.addEventListener('click', (e) => {
    e.preventDefault();
    ratioDependientsTwo.children[0].style.background = '#fff'
    ratioDependientsOne.children[0].style.background = colorPrimaryLight
    ratioDependientsTwo.children[1].style.fontWeight = 'normal'
    ratioDependientsOne.children[0].style.background = 'bold'
    yesDependients.style.display = 'none'
})
ratioDependientsTwo.addEventListener('click', (e) => {
    e.preventDefault();
    ratioDependientsTwo.children[0].style.background = colorPrimaryLight
    ratioDependientsOne.children[0].style.background = '#fff'
    ratioDependientsTwo.children[1].style.fontWeight = 'bold'
    ratioDependientsOne.children[0].style.background = 'normal'
    yesDependients.style.display = 'block'
})
// Phone
const ratioPhoneCvOne = document.querySelector('.posting-cv .phoneCv-1')
const ratioPhoneCvTwo = document.querySelector('.posting-cv .phoneCv-2')
const yesPhoneCv = document.querySelector('.posting-cv .yes-phoneCv')
ratioPhoneCvOne.children[0].style.background = colorPrimaryLight
ratioPhoneCvOne.children[0].style.background = 'bold'
ratioPhoneCvOne.addEventListener('click', (e) => {
    e.preventDefault();
    ratioPhoneCvTwo.children[0].style.background = '#fff'
    ratioPhoneCvOne.children[0].style.background = colorPrimaryLight
    ratioPhoneCvTwo.children[1].style.fontWeight = 'normal'
    ratioPhoneCvOne.children[0].style.background = 'bold'
    yesPhoneCv.style.display = 'none'
})
ratioPhoneCvTwo.addEventListener('click', (e) => {
    e.preventDefault();
    ratioPhoneCvTwo.children[0].style.background = colorPrimaryLight
    ratioPhoneCvOne.children[0].style.background = '#fff'
    ratioPhoneCvTwo.children[1].style.fontWeight = 'bold'
    ratioPhoneCvOne.children[0].style.background = 'normal'
    yesPhoneCv.style.display = 'block'
})
// EmailCv
const ratioEmailCvOne = document.querySelector('.posting-cv .emailCv-1')
const ratioEmailCvTwo = document.querySelector('.posting-cv .emailCv-2')
const yesEmailCv = document.querySelector('.posting-cv .yes-emailCv')
ratioEmailCvOne.children[0].style.background = colorPrimaryLight
ratioEmailCvOne.children[0].style.background = 'bold'
ratioEmailCvOne.addEventListener('click', (e) => {
    e.preventDefault();
    ratioEmailCvTwo.children[0].style.background = '#fff'
    ratioEmailCvOne.children[0].style.background = colorPrimaryLight
    ratioEmailCvTwo.children[1].style.fontWeight = 'normal'
    ratioEmailCvOne.children[0].style.background = 'bold'
    yesEmailCv.style.display = 'none'
})
ratioEmailCvTwo.addEventListener('click', (e) => {
    e.preventDefault();
    ratioEmailCvTwo.children[0].style.background = colorPrimaryLight
    ratioEmailCvOne.children[0].style.background = '#fff'
    ratioEmailCvTwo.children[1].style.fontWeight = 'bold'
    ratioEmailCvOne.children[0].style.background = 'normal'
    yesEmailCv.style.display = 'block'
})
// ImgsCv
const ratioImgsVideoCvOne = document.querySelector('.posting-cv .imgsVideoCv-1')
const ratioImgsVideoCvTwo = document.querySelector('.posting-cv .imgsVideoCv-2')
const yesImgsCv = document.querySelector('.posting-cv .yes-imgsCv')
const yesVideoCv = document.querySelector('.posting-cv .yes-videoCv')
ratioImgsVideoCvOne.addEventListener('click', (e) => {
    e.preventDefault();
    ratioImgsVideoCvTwo.children[0].style.background = '#fff'
    ratioImgsVideoCvOne.children[0].style.background = colorPrimaryLight
    ratioImgsVideoCvTwo.children[1].style.fontWeight = 'normal'
    ratioImgsVideoCvOne.children[0].style.background = 'bold'
    yesImgsCv.style.display = 'block'
    yesVideoCv.style.display = 'none'
})
ratioImgsVideoCvTwo.addEventListener('click', (e) => {
    e.preventDefault();
    ratioImgsVideoCvTwo.children[0].style.background = colorPrimaryLight
    ratioImgsVideoCvOne.children[0].style.background = '#fff'
    ratioImgsVideoCvTwo.children[1].style.fontWeight = 'bold'
    ratioImgsVideoCvOne.children[0].style.background = 'normal'
    yesImgsCv.style.display = 'none'
    yesVideoCv.style.display = 'block'
})
// incorporacionInmediata
// IncorporacionInmediataCv
const incorporacionInmediataCvOne = document.querySelector('.posting-cv .incorporacionInmediata-1')
const incorporacionInmediataCvTwo = document.querySelector('.posting-cv .incorporacionInmediata-2')
const yesIncorporacionInmediataCv = document.querySelector('.posting-cv .yes-incorporacionInmediata')
yesIncorporacionInmediataCv.style.display = 'block'
incorporacionInmediataCvOne.children[0].style.background = 'bold'
incorporacionInmediataCvOne.children[0].style.background = colorPrimaryLight
incorporacionInmediataCvOne.addEventListener('click', (e) => {
    e.preventDefault();
    incorporacionInmediataCvTwo.children[0].style.background = '#fff'
    incorporacionInmediataCvOne.children[0].style.background = colorPrimaryLight
    incorporacionInmediataCvTwo.children[1].style.fontWeight = 'normal'
    incorporacionInmediataCvOne.children[0].style.background = 'bold'
    yesIncorporacionInmediataCv.style.display = 'block'
})
incorporacionInmediataCvTwo.addEventListener('click', (e) => {
    e.preventDefault();
    incorporacionInmediataCvTwo.children[0].style.background = colorPrimaryLight
    incorporacionInmediataCvOne.children[0].style.background = '#fff'
    incorporacionInmediataCvTwo.children[1].style.fontWeight = 'bold'
    incorporacionInmediataCvOne.children[0].style.background = 'normal'
    yesIncorporacionInmediataCv.style.display = 'none'
})
// Dispongo Carnet
const dispongoCarnetCvOne = document.querySelector('.posting-cv .dispongoCarnet-1')
const dispongoCarnetCvTwo = document.querySelector('.posting-cv .dispongoCarnet-2')
const yesDispongoCarnetCv = document.querySelector('.posting-cv .yes-type-carnet')
yesDispongoCarnetCv.style.display = 'block'
dispongoCarnetCvOne.children[0].style.fontWeight = 'bold'
dispongoCarnetCvOne.children[0].style.background = colorPrimaryLight
dispongoCarnetCvOne.addEventListener('click', (e) => {
    e.preventDefault();
    dispongoCarnetCvTwo.children[0].style.background = '#fff'
    dispongoCarnetCvOne.children[0].style.background = colorPrimaryLight
    dispongoCarnetCvTwo.children[1].style.fontWeight = 'normal'
    dispongoCarnetCvOne.children[0].style.background = 'bold'
    yesDispongoCarnetCv.style.display = 'block'
})
dispongoCarnetCvTwo.addEventListener('click', (e) => {
    e.preventDefault();
    dispongoCarnetCvTwo.children[0].style.background = colorPrimaryLight
    dispongoCarnetCvOne.children[0].style.background = '#fff'
    dispongoCarnetCvTwo.children[1].style.fontWeight = 'bold'
    dispongoCarnetCvOne.children[0].style.background = 'normal'
    yesDispongoCarnetCv.style.display = 'none'
})
// Horas extras
const horasExtrasCvOne = document.querySelector('.posting-cv .horasExtras-1')
const horasExtrasCvTwo = document.querySelector('.posting-cv .horasExtras-2')
const horasExtrasCv = document.querySelector('.posting-cv .yes-horasExtras')
horasExtrasCv.style.display = 'block'
horasExtrasCvOne.children[0].style.fontWeight = 'bold'
horasExtrasCvOne.children[0].style.background = colorPrimaryLight
horasExtrasCvOne.addEventListener('click', (e) => {
    e.preventDefault();
    horasExtrasCvTwo.children[0].style.background = '#fff'
    horasExtrasCvOne.children[0].style.background = colorPrimaryLight
    horasExtrasCvTwo.children[1].style.fontWeight = 'normal'
    horasExtrasCvOne.children[0].style.background = 'bold'
    horasExtrasCv.style.display = 'block'
})
horasExtrasCvTwo.addEventListener('click', (e) => {
    e.preventDefault();
    horasExtrasCvTwo.children[0].style.background = colorPrimaryLight
    horasExtrasCvOne.children[0].style.background = '#fff'
    horasExtrasCvTwo.children[1].style.fontWeight = 'bold'
    horasExtrasCvOne.children[0].style.background = 'normal'
    horasExtrasCv.style.display = 'none'
});
// Deportes Practicados
const deportesPracticadosCvOne = document.querySelector('.posting-cv .deportesPracticados-1')
const deportesPracticadosCvTwo = document.querySelector('.posting-cv .deportesPracticados-2')
const deportesPracticadosCv = document.querySelector('.posting-cv .yes-deportes-practicados')
deportesPracticadosCv.style.display = 'block'
deportesPracticadosCvOne.children[0].style.fontWeight = 'bold'
deportesPracticadosCvOne.children[0].style.background = colorPrimaryLight
deportesPracticadosCvOne.addEventListener('click', (e) => {
    e.preventDefault();
    deportesPracticadosCvTwo.children[0].style.background = '#fff'
    deportesPracticadosCvOne.children[0].style.background = colorPrimaryLight
    deportesPracticadosCvTwo.children[1].style.fontWeight = 'normal'
    deportesPracticadosCvOne.children[0].style.background = 'bold'
    deportesPracticadosCv.style.display = 'block'
})
deportesPracticadosCvTwo.addEventListener('click', (e) => {
    e.preventDefault();
    deportesPracticadosCvTwo.children[0].style.background = colorPrimaryLight
    deportesPracticadosCvOne.children[0].style.background = '#fff'
    deportesPracticadosCvTwo.children[1].style.fontWeight = 'bold'
    deportesPracticadosCvOne.children[0].style.background = 'normal'
    deportesPracticadosCv.style.display = 'none'
});
// Asiduidad Deporte
const asiduidadDeporteCvOne = document.querySelector('.posting-cv .asiduidadDeporte-1')
const asiduidadDeporteCvTwo = document.querySelector('.posting-cv .asiduidadDeporte-2')
const asiduidadDeporteCvThree = document.querySelector('.posting-cv .asiduidadDeporte-3')
const yesHorasPracticadasPorDia = document.querySelector('.posting-cv .yes-horasPracticadasPorDia')
const yesHorasPracticadasPorSemana = document.querySelector('.posting-cv .yes-horasPracticadasPorSemana')
const yesHorasPracticadasPorMes = document.querySelector('.posting-cv .yes-horasPracticadasPorMes')
asiduidadDeporteCvOne.children[0].style.background = 'bold'
asiduidadDeporteCvOne.children[0].style.background = colorPrimaryLight
asiduidadDeporteCvOne.addEventListener('click', (e) => {
    e.preventDefault();
    asiduidadDeporteCvTwo.children[0].style.background = '#fff'
    asiduidadDeporteCvThree.children[0].style.background = '#fff'
    asiduidadDeporteCvOne.children[0].style.background = colorPrimaryLight
    asiduidadDeporteCvTwo.children[1].style.fontWeight = 'normal'
    asiduidadDeporteCvThree.children[1].style.fontWeight = 'normal'
    asiduidadDeporteCvOne.children[0].style.background = 'bold'
    yesHorasPracticadasPorDia.style.display = 'block'
    yesHorasPracticadasPorSemana.style.display = 'none'
    yesHorasPracticadasPorMes.style.display = 'none'
})
asiduidadDeporteCvTwo.addEventListener('click', (e) => {
    e.preventDefault();
    asiduidadDeporteCvTwo.children[0].style.background = colorPrimaryLight
    asiduidadDeporteCvThree.children[0].style.background = '#fff'
    asiduidadDeporteCvOne.children[0].style.background = '#fff'
    asiduidadDeporteCvTwo.children[1].style.fontWeight = 'bold'
    asiduidadDeporteCvThree.children[1].style.fontWeight = 'normal'
    asiduidadDeporteCvOne.children[0].style.background = 'normal'
    yesHorasPracticadasPorDia.style.display = 'none'
    yesHorasPracticadasPorSemana.style.display = 'block'
    yesHorasPracticadasPorMes.style.display = 'none'
})
asiduidadDeporteCvThree.addEventListener('click', (e) => {
    e.preventDefault();
    asiduidadDeporteCvTwo.children[0].style.background = '#fff'
    asiduidadDeporteCvThree.children[0].style.background = colorPrimaryLight
    asiduidadDeporteCvOne.children[0].style.background = '#fff'
    asiduidadDeporteCvTwo.children[1].style.fontWeight = 'normal'
    asiduidadDeporteCvThree.children[1].style.fontWeight = 'bold'
    asiduidadDeporteCvOne.children[0].style.background = 'normal'
    yesHorasPracticadasPorDia.style.display = 'none'
    yesHorasPracticadasPorSemana.style.display = 'none'
    yesHorasPracticadasPorMes.style.display = 'block'
})
// Libros Leidos
const librosLeidosCvOne = document.querySelector('.posting-cv .librosLeidos-1')
const librosLeidosCvTwo = document.querySelector('.posting-cv .librosLeidos-2')
const librosLeidosCv = document.querySelector('.posting-cv .yes-librosLeidos')
librosLeidosCv.style.display = 'block'
librosLeidosCvOne.children[0].style.fontWeight = 'bold'
librosLeidosCvOne.children[0].style.background = colorPrimaryLight
librosLeidosCvOne.addEventListener('click', (e) => {
    e.preventDefault();
    librosLeidosCvTwo.children[0].style.background = '#fff'
    librosLeidosCvOne.children[0].style.background = colorPrimaryLight
    librosLeidosCvTwo.children[1].style.fontWeight = 'normal'
    librosLeidosCvOne.children[0].style.background = 'bold'
    librosLeidosCv.style.display = 'block'
})
librosLeidosCvTwo.addEventListener('click', (e) => {
    e.preventDefault();
    librosLeidosCvTwo.children[0].style.background = colorPrimaryLight
    librosLeidosCvOne.children[0].style.background = '#fff'
    librosLeidosCvTwo.children[1].style.fontWeight = 'bold'
    librosLeidosCvOne.children[0].style.background = 'normal'
    librosLeidosCv.style.display = 'none'
});
// Aficiones y Hobbies
const aficionesHobbiesCvOne = document.querySelector('.posting-cv .aficionesHobbies-1')
const aficionesHobbiesCvTwo = document.querySelector('.posting-cv .aficionesHobbies-2')
const aficionesHobbiesCv = document.querySelector('.posting-cv .yes-aficionesHobbies')
aficionesHobbiesCv.style.display = 'block'
aficionesHobbiesCvOne.children[0].style.fontWeight = 'bold'
aficionesHobbiesCvOne.children[0].style.background = colorPrimaryLight
aficionesHobbiesCvOne.addEventListener('click', (e) => {
    e.preventDefault();
    aficionesHobbiesCvTwo.children[0].style.background = '#fff'
    aficionesHobbiesCvOne.children[0].style.background = colorPrimaryLight
    aficionesHobbiesCvTwo.children[1].style.fontWeight = 'normal'
    aficionesHobbiesCvOne.children[0].style.background = 'bold'
    aficionesHobbiesCv.style.display = 'block'
})
aficionesHobbiesCvTwo.addEventListener('click', (e) => {
    e.preventDefault();
    aficionesHobbiesCvTwo.children[0].style.background = colorPrimaryLight
    aficionesHobbiesCvOne.children[0].style.background = '#fff'
    aficionesHobbiesCvTwo.children[1].style.fontWeight = 'bold'
    aficionesHobbiesCvOne.children[0].style.background = 'normal'
    aficionesHobbiesCv.style.display = 'none'
});
// Asiduidad Aficion y Hobbie
const asiduidadAficionHobbieCvOne = document.querySelector('.posting-cv .asiduidadAficionHobbie-1')
const asiduidadAficionHobbieCvTwo = document.querySelector('.posting-cv .asiduidadAficionHobbie-2')
const asiduidadAficionHobbieCvThree = document.querySelector('.posting-cv .asiduidadAficionHobbie-3')
const yesHorasPracticadasPorSemanaAficionHobie = document.querySelector('.posting-cv .yes-horasPracticadasPorSemanaAficionHobbie')
const yesHorasPracticadasPorDiaAficionHobie = document.querySelector('.posting-cv .yes-horasPracticadasPorDiaAficionHobbie')
const yesHorasPracticadasPorMesAficionHobie = document.querySelector('.posting-cv .yes-horasPracticadasPorMesAficionHobbie')
asiduidadAficionHobbieCvOne.children[0].style.background = 'bold'
asiduidadAficionHobbieCvOne.children[0].style.background = colorPrimaryLight
asiduidadAficionHobbieCvOne.addEventListener('click', (e) => {
    e.preventDefault();
    asiduidadAficionHobbieCvTwo.children[0].style.background = '#fff'
    asiduidadAficionHobbieCvThree.children[0].style.background = '#fff'
    asiduidadAficionHobbieCvOne.children[0].style.background = colorPrimaryLight
    asiduidadAficionHobbieCvTwo.children[1].style.fontWeight = 'normal'
    asiduidadAficionHobbieCvThree.children[1].style.fontWeight = 'normal'
    asiduidadAficionHobbieCvOne.children[0].style.background = 'bold'
    yesHorasPracticadasPorDiaAficionHobie.style.display = 'block'
    yesHorasPracticadasPorSemanaAficionHobie.style.display = 'none'
    yesHorasPracticadasPorMesAficionHobie.style.display = 'none'
})
asiduidadAficionHobbieCvTwo.addEventListener('click', (e) => {
    e.preventDefault();
    asiduidadAficionHobbieCvTwo.children[0].style.background = colorPrimaryLight
    asiduidadAficionHobbieCvThree.children[0].style.background = '#fff'
    asiduidadAficionHobbieCvOne.children[0].style.background = '#fff'
    asiduidadAficionHobbieCvTwo.children[1].style.fontWeight = 'bold'
    asiduidadAficionHobbieCvThree.children[1].style.fontWeight = 'normal'
    asiduidadAficionHobbieCvOne.children[0].style.background = 'normal'
    yesHorasPracticadasPorDiaAficionHobie.style.display = 'none'
    yesHorasPracticadasPorSemanaAficionHobie.style.display = 'block'
    yesHorasPracticadasPorMesAficionHobie.style.display = 'none'
})
asiduidadAficionHobbieCvThree.addEventListener('click', (e) => {
    e.preventDefault();
    asiduidadAficionHobbieCvTwo.children[0].style.background = '#fff'
    asiduidadAficionHobbieCvThree.children[0].style.background = colorPrimaryLight
    asiduidadAficionHobbieCvOne.children[0].style.background = '#fff'
    asiduidadAficionHobbieCvTwo.children[1].style.fontWeight = 'normal'
    asiduidadAficionHobbieCvThree.children[1].style.fontWeight = 'bold'
    asiduidadAficionHobbieCvOne.children[0].style.background = 'normal'
    yesHorasPracticadasPorDiaAficionHobie.style.display = 'none'
    yesHorasPracticadasPorSemanaAficionHobie.style.display = 'none'
    yesHorasPracticadasPorMesAficionHobie.style.display = 'block'
})