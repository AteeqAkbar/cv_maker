const db =  require('../models')
const TurndownService = require('turndown');
const turndownService = new TurndownService();

const showdown  = require('showdown')
converter = new showdown.Converter()




const section = async (req,res)=>{


    const experience = turndownService.turndown(`
    <li>
                <div class="date">Add Here</div> 
                <div class="info">
                     <p class="semi-bold">Add Here</p> 
                  <p>Add Here</p>
                </div>
            </li>
`);
    const skills = turndownService.turndown(`
    <li>
             <div class="skill_name">
               HTML
             </div>
             <div class="skill_progress">
               <span style="width: 80%;"></span>
             </div>
             <div class="skill_per">80%</div>
           </li>
`);
    const education = turndownService.turndown(`
    <li>
    <div class="date">2010 - 2013</div> 
    <div class="info">
         <p class="semi-bold">Web Designing (Texas University)</p> 
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
    </div>
</li>
`);




    const templateData = await db.Section.create({
        experience : experience,
        skills : skills,
        education : education,
        template_id : 1
    })
    console.log(templateData.experience);
    html = converter.makeHtml(templateData.experience);
    console.log(html);
    return templateData
}

const getSection = async (req,res)=>{
    console.log("I'm in the section get services")
    getSectionData = await db.Section.findOne({where:{template_id : 1}})
    console.log("===============>>>>>>>>>>>>>>>>>>",getSectionData)
    // htmlSectionData = converter.makeHtml(getSectionData.experience);
    // console.log(htmlSectionData);
    return getSectionData
}

module.exports = {section,getSection}