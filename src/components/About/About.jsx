import './about.css';
import BackgroundBlob from '../ui/BackgroundBlob.jsx';
import Reveal from '../ui/Reveal.jsx';

const avatar = `${import.meta.env.BASE_URL}pxArt.webp`;

const About = () => (
    <section id="about" className="section relative">
        <div className="container-page">
            <Reveal className="flex flex-col items-center gap-12 md:flex-row md:justify-between md:gap-16">
                <div className="order-2 flex flex-col gap-5 md:order-1">
                    <h2 className="font-extrabold">
                        I&apos;m a developer aiming to bring innovation and{' '}
                        <span className="spark">spark</span> into the digital world
                    </h2>
                    <p className="text-muted">
                        In my honest opinion, an application must be flawless &mdash; for both devs
                        and users &mdash; and solve daily problems easily.
                    </p>
                </div>

                <div className="order-1 w-48 shrink-0 md:order-2 md:w-80">
                    <img
                        src={avatar}
                        alt="Pixel-art portrait of Amin Esmaeili"
                        width="800"
                        height="705"
                        loading="lazy"
                        decoding="async"
                        className="aspect-square w-full rounded-full object-cover"
                    />
                </div>
            </Reveal>
        </div>

        <BackgroundBlob position="left-[10%] top-1/2" color="var(--color-plum-deep)" />
    </section>
);

export default About;
