export default class QualifyingEntry{
    constructor(id,name,content,limit,educationQualification,frequency,stage,mode,duration,language,syllabus,pattern,commission,link){
        this.id=id,
        this.name=name,
        this.detail=content,
        this.ageLimit=limit,
        this.qualification=educationQualification,
        this.frequency=frequency,
        this.process=stage,
        this.mode=mode,
        this.duration=duration,
        this.language=language,
        this.syllabus=syllabus,
        this.examPattern=pattern,
        this.commission=commission,
        this.link=link
    }
}