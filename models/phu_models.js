const mongoose = require("mongoose");

// const registerSchema = new mongoose.Schema({
//   username: String,
//   password: String,
//   email: String,
// });
// const Register = mongoose.model("Register", registerSchema);

// const deviceSchema = new mongoose.Schema({
//   id: String,
//   name: String,
// });
// const Device = mongoose.model("Device", deviceSchema);

const gaugeSchema = new mongoose.Schema({
  label: String,
  labelsize: String,
  labelcolor: String,
  unit: String,
  valuesize: String,
  valuecolor: String,
  min: Number,
  max: Number,
  width: String,
  height: String,
  segment: Number,
  needlecolor: String,
  startcolor: String,
  endcolor: String,
  cal: String,
});
const Gauge = mongoose.model("Gauge", gaugeSchema);

const sliderSchema = new mongoose.Schema({
  min: Number,
  max: Number,
  width: String,
  height: String,
  scale: Number,
  ori: String,
  thumb: { bgcolor: String, border: String },
  track: { bgcolor: String, border: String },
  rail: { bgcolor: String },
});
const Slider = mongoose.model("Slider", sliderSchema);

const lampSchema = new mongoose.Schema({
  value: Number,
  data: {
    0: { text: String, color: String, bgcolor: String },
    1: { text: String, color: String, bgcolor: String },
  },
  width: String,
  height: String,
  fontsize: String,
  border: String,
  borderradius: String,
  bordercolor: String,
  posi: String,
});
const Lamp = mongoose.model("Lamp", lampSchema);

const numberSchema = new mongoose.Schema({
  width: String,
  height: String,
  unit: String,
  border: String,
  bordercolor: String,
  borderradius: String,
  bgcolor: String,
  textcolor: String,
  fontsize: String,
  type: String,
  posi: String,
});
const Numbers = mongoose.model("Number", numberSchema);

const numberhSchema = new mongoose.Schema({
  row: Number,
  data: [
    {
      id: Number,
      label: String,
      value: String,
      unit: String,
    },
  ],
});
const NumberH = mongoose.model("NumberH", numberhSchema);

const dashboardbarchartSchema = new mongoose.Schema({
  xlabel: String,
  ylabel: String,
  labels: [String],
  datasets: [
    {
      label: String,
      data: [Number],
    },
  ],
});
const Dashboardbarchart = mongoose.model("Dashboardbarchart", dashboardbarchartSchema);

const numbervSchema = new mongoose.Schema({
  row: Number,
  col: Number,
  header: [
    {
      name: String,
      code: String,
    },
  ],
  data: [
    {
      id: Number,
      label: String,
      label_1: String,
    },
  ],
});
const NumberV = mongoose.model("NumberV", numbervSchema);

// mongoose
//   .connect(
//     "mongodb+srv://ntphu240701:phu123@cluster0.49dod8z.mongodb.net/DAT_DB?retryWrites=true&w=majority"
//   )
mongoose
  .connect("mongodb://loctp:abc123@164.70.98.231:27017/admin")
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Failed to connect to database");
  });

module.exports = {
  // Register,
  // Device,
  Gauge,
  Slider,
  Lamp,
  Numbers,
  NumberH,
  Dashboardbarchart,
  NumberV,
};
