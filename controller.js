import { asynchandler } from "./asynchandler.js"
import { records } from "./model.js";

export const addrec=asynchandler(async(req,res)=>{
    const rec=req.body;
    if(!req){
        return res.status(400).json("no data")
    }
    const record=await records.create({
        basicInfo:rec.basicInfo,
        questions:rec.questions,
        likertScales:rec.likertScales,
        stressAssessment:rec.stressAssessment
    })
    if (!record){
        return res.status(500).json("Error creating record")
    }
    res.status(200).json(record)
})

export const getrecs=asynchandler(async(req,res)=>{
    const record=await records.find({})
    if(!record){
        return res.status(500).json("error while fetching")
    }
    res.status(200).json(record)
})
