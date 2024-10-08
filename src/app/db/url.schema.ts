import mongoose, { Document, Schema } from 'mongoose';

export interface IUrl extends Document {
	_id: string;
	longUrl: string;
	shortCode: string;
	createdAt: Date;
	updatedAt: Date;
}

const urlSchema = new Schema<IUrl>({
	longUrl: {
		type: String,
		required: true,
		trim: true,
	},
	shortCode: {
		type: String,
		required: true,
		trim: true,
		unique: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	updatedAt: {
		type: Date,
		default: Date.now,
	},
});

urlSchema.methods.shortCodeExists = async function (shortCode: string) {
    const url = await Url.findOne({ shortCode });
    return !!url;
}

const Url = mongoose.model('Url', urlSchema);
export default urlSchema;
