import { type Document, Schema, model } from "mongoose"

interface DDb extends Document {
  userId: string
  count: number
}

const SDb = new Schema<DDb>({
  userId: { type: String, required: true },
  count: { type: Number, default: 1 }
})

export const MDb = model<DDb>("db", SDb)
