interface IFieldType {
    children: React.ReactNode;
    fieldName: string;
    label?: string; // Optional label
    fieldError?: Record<string, { message?: string }>; // Optional, dynamic keys
}

export default IFieldType