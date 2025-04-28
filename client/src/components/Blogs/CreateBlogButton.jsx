import { Link } from 'react-router-dom';

const CreateBlogButton = () => {
    const token = localStorage.getItem('token');

    if (!token) return null;

    return (
        <Link
            to="/create-blog"
            className="fixed bottom-8 right-8 bg-[#128d8a] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-[#0f6b69] transition-colors z-50"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
        </Link>
    );
};

export default CreateBlogButton;