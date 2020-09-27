import { Parallax } from 'react-parallax';

type Props = {
    pageName: string;
    bgImage?: string;
    height?: string;
}

export default function ParallaxWrapper({
    pageName,
    bgImage = '/images/second.png',
    height = '350px',
} : Props) {
    return (
        <div className="h-25 border-white">
            <Parallax
                blur={4}
                bgImage={bgImage}
                strength={400}
            >
                <div style={{ height }} className="d-flex justify-content-center">
                    <div className="align-self-center">
                        <h3 className="display-1 mb-4 text-center text-white">
                            {pageName}
                        </h3>
                    </div>
                </div>
            </Parallax>
        </div>
    );
}