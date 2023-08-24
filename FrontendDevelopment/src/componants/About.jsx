import assets from "../assets/imges"
import styles from "../style"
import { layout } from "../style"

const About = () => {
  return (
    <div className={`${styles.paddingY} ${styles.paddingx}`}>
        <div className="text-center">
            <h1 className="text-5xl font-Italianno  text-black font-medium  my-4 capitalize ">About <span className="text-primary font-Sue text-5
            xl not-italic font-normal leading-[normal] capitalize">only brownies</span></h1>
            <div className={`${styles.paddingY} ${layout.section} items-center gap-20`} >
                <img src={assets.aboutimg} alt="aboutimg" className="object-contain h-[20rem] lg:h-[30rem]" />
                <div className={`${layout.sectionInfo} flex flex-col gap-4`}>
                    <h3 className="text-5xl font-semibold mb-4 max-w-3xl leading-normal text-left capitalize">only brownies is the best dessert store in UK </h3>
                    <p className="text-2xl text-scondary leading-10 ">only brownies is simply dummy text of the printing and typesetting industry. only brownies has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
                <div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default About