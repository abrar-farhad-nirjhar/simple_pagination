let myEssays=[
    {
        title:"My Pet Rabbit",
        essay: "I have a pet rabbit. Its name is Bunnie. It is brown in colour and white patches on one eye and both the ears. It is soft and furry. It likes to eat carrots. It keeps running around in the garden. Whenever it sees me, it runs between my legs and pimps around me. We have made a small burrow for it in the garden. I love Bunnie very much."
    },
    {
        title:"The Horse",
        essay:"The horse has a strong and beautiful body. He has four legs and a long beautiful tail. His neck looks very beautiful. Horses are of many sizes and colours. He is a very useful animal. He is harnessed to carriages. He is used for riding and ploughing. Some horses are specially trained to be used in battles and processions. He carries heavy loads  specially in hilly countries. The horses eats grass and grams. He is very faithful to his  master. Warriors are very fond of their horses."
    },
    {
        title:"My Classroom",
        essay:"Our class sits in a room in the upper storey. It is 25 feet long and 20 feet wide. There are two doors, four windows and 8 ventilators. The walls are painted with bright colors. The floor is made of wooden. Our room is airy, open and well ventilated. There are 20 tables 40 chairs. The tables are arranged in 5 rows of 4 tables each. There are 2 chairs at each table. In front there is a raised wooden platform. The teacher’s table, chair and a blackboard are placed on the platform. There is an almirah for the use of teachers. The walls  are decorated with beautiful pictures, cartoon characters,  maps, diagrams and mottoes. A smart board is also there in our class. The time table and charts hung on the front wall. It is kept perfectly neat and clean."
    },
    {
        title:"The School Playground",
        essay:"There is a good playground in our school. It is just close to the school. It has green grass looking like green velvet all round the ground. There are green shrubs which are beautifully trimmed. There is a gardener to water and look after it. It is divided into 4 parts. We play football, hockey, cricket and volleyball. It is compulsory for every student to take part in games. Each game is in the charge of a teacher. The games begin at half past five. It is pleasant sight to see all the students at play. The headmaster and the Teachers join the games. There is a wave of joy and happiness everywhere. All look  bright happy and jolly."
    },
    {
        title:"Pollution",
        essay:"The modern man in the name of progress has interfered too much with nature. As a result, environment has become polluted. Step by step, the precious gifts of nature are being destroyed. There are three kinds of pollution such as: Air pollutions- Air pollutions are mostly caused by smoke coming out of the chimneys of factories, mills or workshops etc. Air pollutions may cause lung diseases, asthma, eye flu, headache etc."
    },
]

console.log(myEssays)

document.getElementById('title').innerHTML = myEssays[0].title
document.getElementById('content').innerHTML = myEssays[0].essay


document.getElementById('1').addEventListener('click', ()=>{

    document.getElementById('title').innerHTML = myEssays[0].title
document.getElementById('content').innerHTML = myEssays[0].essay


})

let current = 0
for(let i=1; i<=5;i++){
    document.getElementById(String(i)).addEventListener("click",()=>{

        document.getElementById('title').innerHTML = myEssays[i-1].title
        document.getElementById('content').innerHTML = myEssays[i-1].essay

        current = i-1

        

    })
}


document.getElementById('prev').addEventListener("click",()=>{
    if(current!=0){
        document.getElementById('title').innerHTML = myEssays[current-1].title
        document.getElementById('content').innerHTML = myEssays[current-1].essay

        current = current-1
    }
})

document.getElementById('next').addEventListener("click", ()=>{
    if(current!=4){

        

        document.getElementById('title').innerHTML = myEssays[current+1].title
        document.getElementById('content').innerHTML = myEssays[current+1].essay
        if(current!=4){
            current = current+1
        }

        
    }
})

