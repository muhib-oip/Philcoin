import { model, Schema, Document } from "mongoose";

export const DOCUMENT_NAME = "Invitation";
export const COLLECTION_NAME = "invitations";
import { DOCUMENT_NAME as USER_DOCUMENT } from '../users/model'
export default interface Invitation extends Document {
    email: string;
    name: string;
    status: string;
    userId: string;
}

const schema = new Schema(
    {
        email: {
            type: Schema.Types.String,
            required: true,
            trim: true,
        },
        userId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: USER_DOCUMENT
        },
        name: {
            type: Schema.Types.String,
            required: true,
            trim: true,
        },
        status: {
            type: Schema.Types.String,
            required: true,
            trim: true,
            enum: ['accepted', 'declined']
        },

    }
);

export const InvitationModel = model<Invitation>(
    DOCUMENT_NAME,
    schema,
    COLLECTION_NAME
);