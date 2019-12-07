// importing images
import Tent from "../../assets/imgs/search-tent.jpg";
import Files from "../../assets/imgs/investigation-files.jpg";
import Report from "../../assets/imgs/reports.jpg"

// array featuring content for investigation page
export default[
  {
    id: 0,
    header:"The Search",
    text: "The search for the hikers began after a suspicious silence on their behalf. Dyatlov told his sports club he would send a telegram to them once they returned to Vizhai by February 12. At first people remained calm. Dyatlov even told Yudin he might stay longer than that. Also, delays in messages had been common with expeditions such as these. On the 20th of February, and still hearing no information, family and friends of the hikers requested a rescue operation and the head of the institute sent began a search party with volunteer students and teachers. Still no luck, armed forced began looking for the hikers and thus the rescue operation went into full swing. The first bodies were found on February 26th on Kholat Syakhl. The tent was torn down and the groups belongings were all left inside. They were shoeless and dressed only in their underwear. It took until May to find the last bodies",
    style: "one",
    photo: Tent,
  },
  {
    id:1,
    header:"The Medical Examination",
    text: "When the first five bodies were found, an investigation began. Medical examinations found no injuries that led to their deaths, and it was concluded they all died from hypothermia. Three of these hikers appeared to have severe fractures to the head and chest. Doctors said the force had to be similar to that of a car crash, yet none of the bodies had any external wounds. In addition, some of the bodies found by a river had also been missing parts of their tongue, eyes and lips. One of the more bizarre findings was Aleksander Kolevatov was missing his eyebrows. Initial theories were that the hikers had been attacked by native tribes; however there was no sign of struggle or other footprints visible.",
    style: "two",
    photo: Files,
  },
  {
    id:2,
    header:"Journalist Reports",
    text: "Journalists that had access to the inquest files reported this about the confounding events at Dyatlov Pass: \n  1. Six of the group members died from hypothermia, three from fatal injuries. \n2. There were no indications of other people nearby on Kholat Syakhl apart from the nine travellers.\n3. The tent had been ripped open from within \n4. The victims died 6-8 hours after their last meal\n5. All group members left camp on their own accord, by foot\n6. High levels of radiation were found on one victim's coat (this is most likely due to his employment at a nuclear power facility).\n7. Fatal injuries could not have been dealt by another human.\n8. Documents released had no information on the hikers' internal organs.\n9. there were no survivors of the incident.",
    style: "three",
    photo: Report,
  }
]
