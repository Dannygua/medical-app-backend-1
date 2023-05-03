import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      require: true,
      trim: true,
    },
    lastname: {
      type: String,
      require: true,
      trim: true,
    },
    password: {
      type: String,
      require: true,
      trim: true,
    },
    email: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
    bornDate: {
      type: Date,
      require: true,
      trim: true,
    },
    isDoctor: {
      type: Boolean,
      trim: true,
    },
    isPatient: {
      type: Boolean,
      trim: true,
    },
    isPychologist: {
      type: Boolean,
      trim: true,
    },
    isNutri: {
      type: Boolean,
      trim: true,
    },
    token: {
      type: String,
    },

    token: {
      type: String,
    },
    profile: [
      {
        bornDate: {
          type: Date,
          trim: true,
        },
        address: {
          type: String,
          validate: {
            validator: function () {
              return this.isPatient != true && this.address != null;
            },
            message: "Direccion requerida",
          },
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
        height: {
          type: Number,
          trim: true,
        },
        imc: {
          type: Number,
          trim: true,
        },
        ocupation: {
          type: String,
          trim: true,
        },
        phone: {
          type: Number,
          trim: true,
        },
        profession: {
          type: String,
          trim: true,
        },
        referredBy: {
          type: String,
          trim: true,
        },
        weight: {
          type: Number,
          trim: true,
        },
      },
    ],
  },

  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.comprobarPassword = async function (passwordFormulario) {
  return await bcrypt.compare(passwordFormulario, this.password);
};

const User = mongoose.model("Usuario", UserSchema);

export default User;
