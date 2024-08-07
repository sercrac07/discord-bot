import { type Document, Schema, model } from "mongoose"

interface SDb extends Document {
  userId: string
  count: number
}

const SDb = new Schema<SDb>({
  userId: { type: String, required: true },
  count: { type: Number, default: 1 }
})

export const MDb = model<SDb>("db", SDb)
