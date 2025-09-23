const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const multer = require("multer")

const app=express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true })); // Parses form-encoded bodies


app.listen(9000,(req,res)=>{
    console.log("server start at 9000")
})
mongoose.connect('mongodb+srv://hostel:paras12345@hostel.4fnadp1.mongodb.net/hostel?retryWrites=true&w=majority&appName=hostel', {
  
})
.then(() => console.log('✅ Connected to MongoDB: hostel database'))
.catch(err => console.log('❌ Error connecting to MongoDB:', err));


//register page
const registerschema=mongoose.Schema({

    name:String,
    lname:String,
    mail:String,
    password:String,
    utype:String
})


const registermodel=mongoose.model("register",registerschema,"register")

app.post("/register",async(req,res)=>{

    const result= new registermodel({
        name:req.body.name,
        lname:req.body.lname,
        mail:req.body.mail,
        password:req.body.password,
        utype:"user"
    })

    const data=await result.save();
    if(!data){
        res.send({statuscode:0})
    }else{
        res.send({statuscode:1})
    }

})




// doctor registration


const docregschema=mongoose.Schema({

    name:String,
    contact:String,
    spec:String,
    expe:String,
    email:String,
    password:String
    
})


const docregmodel=mongoose.model("docreg",docregschema,"docreg")

app.post("/docreg",async(req,res)=>{

    const result= new docregmodel({
        name:req.body.name,
        contact:req.body.contact,
        spec:req.body.spec,
        expr:req.body.expe,
        email:req.body.email,
        password:req.body.password
       
    })

    const data=await result.save();
    if(!data){
        res.send({statuscode:0})
    }else{
        res.send({statuscode:1})
    }

})

//login

// app.post("/login",async(req,res)=>{
//     const result= await registermodel.findOne({mail:req.body.mail})
//     if(result.password===req.body.password){
//        res.send({statuscode:1})
//     }else{
//        res.send({statuscode:0})
//     }
   
//    })
app.post("/login",async(req,res)=>{
 const result= await registermodel.findOne({mail:req.body.mail})

 if(!result){
    res.send({statuscode:0})
 }
 else{

    if(result.password===req.body.password){
        if(result.utype==="user"){
        res.send({statuscode:1,utype:"user",memberdata:result})
    }
    else{
    res.send({statuscode:1,utype:"admin",memberdata:result})
 }
 }
 }
})



// contact us !!!

const contactschema=mongoose.Schema({

    name:String,
    email:String,
    phno:String,
    msg:String,
    
})


const contactmodel=mongoose.model("contact",contactschema,"contact")

app.post("/contact",async(req,res)=>{

    const result= new contactmodel({
        name:req.body.name,
        email:req.body.email,
        phno:req.body.phno,
        msg:req.body.msg
    })

    const data=await result.save();
    if(!data){
        res.send({statuscode:0})
    }else{
        res.send({statuscode:1})
    }

})


 //add doctors
 
 let picname // globally declare
const mystorage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null,"./public/uploads");
    },
    filename:(req, file, cb) => {
        picname = Date.now() + file.originalname;
     
        cb(null,picname);
    },
});
const upload =multer({storage:mystorage});


const add_docschema=mongoose.Schema({
    name:String,
    quali:String,
    file:String,

})
const add_docmodel=mongoose.model("add_doc",add_docschema,"add_doc")

app.post("/add_doc",upload.single("file"),async(req,res)=>{

    const result= new add_docmodel({
        name:req.body.name,
        quali:req.body.quali,
        file:picname
         
    })

    const data= result.save()
    if(!data){
        res.send({statuscode:0})
    }else{
        res.send({statuscode:1})
    }
})

//fetch doctor

app.get("/doc_show",async(req,res)=>{
    const result =await add_docmodel.find()

    if(!result){
        res.send({statuscode:0})
    }else{
        res.send({statuscode:1, data:result})
    }
})


// delete doctor

app.delete("/delete/:id", async(req,res)=>{
 
    const result=await add_docmodel.findOneAndDelete({_id:req.params.id});

    if(result){
        res.send({statuscode:1})
    }else{
        res.send({statuscode:0})
    }

})

//detail
app.get("/detail/:id",async(req,res)=>{
    const result = await add_docmodel.findOne({_id:req.params.id})

    if(result){
        res.send({statuscode:1,pd:result})
    }else{
        res.send({statuscode:0})
    }
})


// Update the appointment schema to include symptoms and assignedDoctor
const appointmentschema = mongoose.Schema({
  Name: String,
  email: String,
  contact: String,
  date: String,
  time: String,
  symptoms: String,
  status: { type: String, default: 'pending' }, // pending, approved, rejected
  assignedDoctor: { type: String, default: '' }
});

const appointmentmodel = mongoose.model("appointment", appointmentschema, "appointment");

// Existing appointment submission route
app.post("/appointment", async (req, res) => {
  const result = new appointmentmodel({
    Name: req.body.name,
    email: req.body.email,
    contact: req.body.contact,
    date: req.body.date,
    time: req.body.time,
    symptoms: req.body.symptoms,
    status: 'pending'
  });

  const data = await result.save();
  if (!data) {
    res.send({ statuscode: 0 });
  } else {
    res.send({ statuscode: 1 });
  }
});

// New route to get pending appointments with doctor list
app.get('/pending-appointments', async (req, res) => {
  try {
    const [appointments, doctors] = await Promise.all([
      appointmentmodel.find({ status: 'pending' }),
      add_docmodel.find()
    ]);
    
    res.send({ 
      statuscode: 1, 
      data: appointments,
      doctors: doctors 
    });
  } catch (error) {
    res.send({ statuscode: 0, message: 'Error fetching data' });
  }
});

// New route to update appointment status and assign doctor
app.put('/update-appointment/:id', async (req, res) => {
  const { id } = req.params;
  const { status, doctorId } = req.body;

  try {
    let updateData = { status };
    if (status === 'approved' && doctorId) {
      const doctor = await add_docmodel.findById(doctorId);
      if (doctor) {
        updateData.assignedDoctor = doctor.name;
      }
    }

    const result = await appointmentmodel.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );

    if (result) {
      res.send({ statuscode: 1, data: result });
    } else {
      res.send({ statuscode: 0, message: 'Appointment not found' });
    }
  } catch (error) {
    res.send({ statuscode: 0, message: 'Error updating appointment' });
  }
});

// Update the showappointment route to only show approved appointments
app.get('/showappointment', async (req, res) => {
  const result = await appointmentmodel.find({ status: 'approved' });
  if (result) {
    res.send({ statuscode: 1, data: result });
  } else {
    res.send({ statuscode: 0 });
  }
});
// add services

const serviceschema=mongoose.Schema({
    
    file:String,
    service:String,
    disc:String

})
const servicemodel=mongoose.model("service",serviceschema,"service")

app.post("/service",upload.single("file"),async(req,res)=>{

    const result= new servicemodel({
      
        file:picname,
        service:req.body.service,
        disc:req.body.disc
         
    })

    const data= result.save()
    if(!data){
        res.send({statuscode:0})
    }else{
        res.send({statuscode:1})
    }
})

//fetch services

app.get("/service",async(req,res)=>{
    const result =await servicemodel.find()

    if(!result){
        res.send({statuscode:0})
    }else{
        res.send({statuscode:1, data:result})
    }
})


//delete service


app.delete("/dele/:id", async(req,res)=>{
 
    const result=await servicemodel.findOneAndDelete({_id:req.params.id});

    if(result){
        res.send({statuscode:1})
    }else{
        res.send({statuscode:0})
    }

})


// Symptom Schema and Model
const symptomSchema = new mongoose.Schema({
  name: String,
  description: String
});
const Symptom = mongoose.model("Symptom", symptomSchema);

// Medicine Schema and Model
const medicineSchema = new mongoose.Schema({
  name: String,
  description: String,
  dosage: String,
  precautions: String,
  symptoms: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Symptom' }]
});
const Medicine = mongoose.model("Medicine", medicineSchema);

// Seed initial data
async function seedInitialData() {
  try {
    // Check if data already exists
    const existingSymptoms = await Symptom.countDocuments();
    if (existingSymptoms === 0) {
      // Add sample symptoms
      const symptoms = await Symptom.insertMany([
        { name: "Headache", description: "Pain in the head or upper neck area" },
        { name: "Fever", description: "Elevated body temperature" },
        { name: "Cough", description: "Expulsion of air from lungs with sudden sharp sound" },
        { name: "Sore Throat", description: "Pain, scratchiness or irritation of the throat" },
        { name: "Nausea", description: "Uneasy stomach with urge to vomit" },
        { name: "Fatigue", description: "Feeling of tiredness or exhaustion" },
        { name: "Muscle Pain", description: "Pain or discomfort in muscles" },
        { name: "Runny Nose", description: "Excess nasal drainage" }
      ]);
      
      // Add sample medicines
      await Medicine.insertMany([
        {
          name: "Paracetamol",
          description: "Pain reliever and fever reducer",
          dosage: "500mg every 4-6 hours",
          precautions: "Do not exceed 4g per day",
          symptoms: [symptoms[0]._id, symptoms[1]._id]
        },
        {
          name: "Ibuprofen",
          description: "Nonsteroidal anti-inflammatory drug",
          dosage: "200-400mg every 4-6 hours",
          precautions: "Take with food to avoid stomach upset",
          symptoms: [symptoms[0]._id, symptoms[1]._id, symptoms[3]._id, symptoms[6]._id]
        },
        {
          name: "Dextromethorphan",
          description: "Cough suppressant",
          dosage: "10-20mg every 4 hours",
          precautions: "Do not use with MAO inhibitors",
          symptoms: [symptoms[2]._id]
        },
        {
          name: "Chlorpheniramine",
          description: "Antihistamine for allergies and runny nose",
          dosage: "4mg every 4-6 hours",
          precautions: "May cause drowsiness",
          symptoms: [symptoms[7]._id, symptoms[3]._id]
        },
        {
          name: "Ondansetron",
          description: "Anti-nausea medication",
          dosage: "4-8mg every 8 hours",
          precautions: "Consult doctor for severe nausea",
          symptoms: [symptoms[4]._id]
        }
      ]);
      console.log("Database seeded with initial data");
    }
  } catch (err) {
    console.error("Error seeding data:", err);
  }
}

// Routes for Symptom Checker
app.get("/symptoms", async (req, res) => {
  try {
    const symptoms = await Symptom.find();
    res.json({ statuscode: 1, data: symptoms });
  } catch (err) {
    res.status(500).json({ statuscode: 0, message: err.message });
  }
});

app.post("/check-symptoms", async (req, res) => {
  try {
    const { symptoms } = req.body;
    
    if (!symptoms || !Array.isArray(symptoms)) {
      return res.status(400).json({ 
        statuscode: 0, 
        message: "Symptoms must be provided as an array" 
      });
    }

    // Validate and convert symptom IDs
    const validSymptomIds = symptoms.filter(id => {
      try {
        return mongoose.isValidObjectId(id) && 
               new mongoose.Types.ObjectId(id).toString() === id;
      } catch (err) {
        return false;
      }
    });

    if (validSymptomIds.length === 0) {
      return res.status(400).json({ 
        statuscode: 0, 
        message: "No valid symptom IDs provided" 
      });
    }

    const symptomIds = validSymptomIds.map(id => new mongoose.Types.ObjectId(id));
    
    const medicines = await Medicine.find({
      symptoms: { $in: symptomIds }
    }).populate('symptoms');
    
    res.json({ 
      statuscode: 1, 
      data: medicines,
      message: "Recommended medicines based on your symptoms"
    });
  } catch (err) {
    console.error("Error in check-symptoms:", err);
    res.status(500).json({ 
      statuscode: 0, 
      message: "Internal server error",
      error: err.message 
    });
  }
});

// Add new symptom
app.post("/add-symptom", async (req, res) => {
  try {
    const { name, description } = req.body;
    
    if (!name || !description) {
      return res.status(400).json({ 
        statuscode: 0, 
        message: "Name and description are required" 
      });
    }
    
    const newSymptom = new Symptom({ name, description });
    await newSymptom.save();
    
    res.json({ 
      statuscode: 1, 
      message: "Symptom added successfully",
      data: newSymptom
    });
  } catch (err) {
    res.status(500).json({ statuscode: 0, message: err.message });
  }
});

// Add new medicine
app.post("/add-medicine", async (req, res) => {
  try {
    const { name, description, dosage, precautions, symptoms } = req.body;
    
    if (!name || !description || !dosage || !precautions || !symptoms) {
      return res.status(400).json({ 
        statuscode: 0, 
        message: "All fields are required" 
      });
    }
    
    const newMedicine = new Medicine({ 
      name, 
      description, 
      dosage, 
      precautions, 
      symptoms 
    });
    await newMedicine.save();
    
    res.json({ 
      statuscode: 1, 
      message: "Medicine added successfully",
      data: newMedicine
    });
  } catch (err) {
    res.status(500).json({ statuscode: 0, message: err.message });
  }
});


// Get all medicines
app.get("/medicines", async (req, res) => {
  try {
    const medicines = await Medicine.find().populate('symptoms');
    res.json({ statuscode: 1, data: medicines });
  } catch (err) {
    res.status(500).json({ statuscode: 0, message: err.message });
  }
});

 