import mongoose from 'mongoose';
import { updateIfCurrentPlugin } from 'mongoose-update-if-current';

interface AssetAttrs {
  ip: string;
  name: string;
  description: string;
  dateCreated: Date;
}

export interface AssetDoc extends mongoose.Document {
  ip: string;
  name: string;
  description: string;
  dateCreated: Date;
  lastScanned: Date;
  version: number;
}

interface AssetModel extends mongoose.Model<AssetDoc> {
  build(attrs: AssetAttrs): AssetDoc;
}

const assetSchema = new mongoose.Schema(
  {
    ip: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    lastScanned: {
      type: Date,
      required: false,
      default: null
    },
    dateCreated: {
      type: Date,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

assetSchema.set('versionKey', 'version');
assetSchema.plugin(updateIfCurrentPlugin);

assetSchema.statics.build = (attrs: AssetAttrs) => {
  return new Asset(attrs); 
};

const Asset = mongoose.model<AssetDoc, AssetModel>('Asset', assetSchema);

export { Asset };
