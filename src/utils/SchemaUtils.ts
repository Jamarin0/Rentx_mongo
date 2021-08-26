import { Schema } from 'mongoose';

class SchemaUtil {
    static schema = <T>(fields: object): Schema<T> => new Schema<T>(fields);
}

export default SchemaUtil.schema;