type MessageProps = {
    text: string | null;
};

export const Message = ({ text }: MessageProps) => {
    if (!text) return null;

    return (
        <div className="mt-4 text-center text-lg">
        {text}
        </div>
    );
};  