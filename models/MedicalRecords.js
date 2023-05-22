import mongoose from "mongoose";

const RecordSchema = mongoose.Schema(
  {
    iddate: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Dates",
      required: true,
    },
    isMain: {
      type: Boolean,
      trim: true,
    },
    idpatient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuarios",
      required: true,
    },
    idespecialist: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuarios",
      required: true,
    },
    active: {
      type: Boolean,
      trim: true,
      default: false,
    },
    recipe: {
      type: String,
      trim: true,
    },
    Test: [
      {
        name: {
          type: String,
          trim: true,
        },
        namePhoto: {
          type: String,
          trim: true,
        },
        resultPhoto: [
          {
            type: String,
          },
        ],
      },
    ],

    generalInfo: {
      bornDate: {
        type: Date,
        trim: true,
      },
      bornPlace: {
        type: String,
        trim: true,
      },
      ci: {
        type: String,
        trim: true,
      },
      civilState: {
        type: String,
        trim: true,
      },
    },

    contactInfo: {
      address: {
        type: String,
        //   validate: {
        //     validator: function () {
        //       return this.isPatient != true && this.address != null;
        //     },
        //     message: "Direccion requerida",
        //   },
        trim: true,
      },
      phone: {
        type: Number,
        trim: true,
      },
    },

    medicalInfo: {
      height: {
        type: Number,
        trim: true,
      },
      imc: {
        type: Number,
        trim: true,
      },
      weight: {
        type: Number,
        trim: true,
      },
      isAllowed: {
        type: Boolean,
        trim: true,
      },
    },

    nutriInfo: {
      allergies: [
        {
          name: {
            type: String,
            trim: true,
          }
        },
      ],
      waistMeasurement: {
        type: Number,
        trim: true
      },
      backMeasurement: {
        type: Number,
        trim: true
      },
      exercisePerWeek: {
        type: Number,
        trim: true
      },
      dailyWater: {
        type: Number,
        trim: true
      },
      comments: {
        type: String
      },
      isAllowed: {
        type: Boolean,
        trim: true,
      },
    },

    psychologistInfo: {
      comments: {
        type: String
      },
      isAllowed: {
        type: Boolean,
        trim: true,
      }
    },

    comments: {
      type: String
    }
  },

  {
    timestamps: true,
  }
);

const Record = mongoose.model("Record", RecordSchema);

export default Record;
