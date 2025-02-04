import { Dimension } from '@cloud-graph/types';

type Props = {
    dimension: Dimension;
};

const Node3D = () => {
    return (
        <>
            <svg width="100.626" height="115.695">
                <path
                    fill="#4286c5"
                    d="M50.313 1.155v56.693L99.41 29.501z"
                    fillRule="evenodd"
                ></path>
                <path
                    fill="#26527b"
                    d="m1.215 29.501 49.098 28.347V1.155z"
                    fillRule="evenodd"
                ></path>
                <path
                    fill="none"
                    stroke="#020406"
                    d="M50.313 1.155v56.693"
                ></path>
                <path
                    fill="#26527b"
                    d="M50.313 57.847 99.41 29.501l-24.549 70.866-24.548 14.173z"
                    fillRule="evenodd"
                ></path>
                <path
                    fill="#326ca2"
                    d="m1.215 29.501 49.098 28.347v56.692l-24.55-14.173z"
                    fillRule="evenodd"
                ></path>
                <path
                    fill="none"
                    stroke="#0e1e2d"
                    d="m1.215 29.501 49.098 28.347L99.41 29.501 50.313 57.848v56.692"
                ></path>
                <path
                    fill="none"
                    stroke="#000000"
                    d="M50.313 1.155 1.214 29.501l24.549 70.866 24.549 14.173 24.548-14.173 24.549-70.866z"
                    strokeWidth="2"
                ></path>
            </svg>
        </>
    );
};

const Node2D = () => {
    return (
        <svg width="90" height="90">
            <path fill="#52ae2f" d="M0 0h90v90H0z"></path>
            <path
                fill="#ffffff"
                d="M73.716 48.072c-.348-1.884-2.484-3.216-3.948-4.164-.468-.3-1.752-.78-1.86-1.2a2.832 2.832 0 0 1 .12-.888l1.2-8.628c.348-2.532.684-5.064 1.032-7.596.312-2.328-.804-3.888-2.7-5.196-3.864-2.676-8.904-3.756-13.452-4.5a67.02 67.02 0 0 0-17.256-.564 48 48 0 0 0-15.036 3.6c-2.568 1.2-5.928 3.072-5.508 6.348 1.2 9.744 2.616 19.464 3.924 29.196l1.8 13.356a4.956 4.956 0 0 0 2.952 3.996c3.72 2.016 8.328 2.592 12.48 2.976A61.8 61.8 0 0 0 54 74.076c3.456-.636 9.888-1.68 10.44-6 .684-5.352 1.44-10.704 2.16-16.044l.264-1.632c1.956.468 7.536 1.464 6.852-2.328zM43.26 17.4c7.2 0 15.444.816 21.9 4.368.996.552 3.312 1.788 2.616 3.252-.696 1.464-2.856 2.196-4.176 2.724a37.056 37.056 0 0 1-5.796 1.62 74.748 74.748 0 0 1-25.992.54 32.16 32.16 0 0 1-11.184-3.276c-.864-.492-2.292-1.38-1.896-2.556a3.6 3.6 0 0 1 1.416-1.512 25.008 25.008 0 0 1 8.64-3.492A60.42 60.42 0 0 1 43.26 17.4zm18.816 50.58c-.18 1.404-2.496 2.1-3.6 2.496a35.52 35.52 0 0 1-7.056 1.584 60.864 60.864 0 0 1-16.044 0 26.688 26.688 0 0 1-9.6-2.604 2.4 2.4 0 0 1-1.44-2.076c-1.2-9.516-2.568-19.032-3.852-28.548l-1.392-10.32a27.912 27.912 0 0 0 8.76 3.072 71.544 71.544 0 0 0 9.972 1.308A77.76 77.76 0 0 0 57.492 31.8a29.124 29.124 0 0 0 9.852-3.288L64.8 47.352a144.516 144.516 0 0 1-17.784-7.2 5.124 5.124 0 0 1-.732-.348c-.324-.24-.24-.12-.396-.492-.3-.684-.372-1.2-1.008-1.764a2.7 2.7 0 1 0-1.488 4.8 4.944 4.944 0 0 0 1.2-.36c.468-.144.468-.12.96.108a152.064 152.064 0 0 0 18 7.392c.924.3.912 0 .912.768a13.788 13.788 0 0 1-.228 1.74l-.768 5.724ZM43.56 39.6c0 .324-.456.288-.576.084-.12-.204.576-.54.576-.084ZM67.2 48l.36-2.652c1.2.684 3.24 1.716 3.78 3.084-1.176.48-3.036-.156-4.14-.432Z"
            ></path>
        </svg>
    );
};
export default ({ dimension }: Props) => {
    return dimension === '2d' ? <Node2D /> : <Node3D />;
};
