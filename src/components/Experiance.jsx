import html from '../../public/html.png'
import css from '../../public/css.jpg'
import java from '../../public/java.png'
import javascript from '../../public/javascript.png'
import oracle from '../../public/oracle.png'
import spring from '../../public/spring.png'
import springBoot from "../../public/springBoot.jpg"

const Experience = () => {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML"
    },
    {
      id: 2,
      logo: java,
      name: "Java"
    },
    {
      id: 3,
      logo: javascript,
      name: "Javascript"
    },
    {
      id: 4,
      logo: oracle,
      name: "oracle"
    },
    {
      id: 5,
      logo: spring,
      name: "Spring"
    },
    {
      id: 6,
      logo: springBoot,
      name: "springBoot"
    },
       {
      id: 7,
      logo: css,
      name: "CSS"
    },
  ]
  return (
    <div name= "Experience" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
      <div>
        <h1 className="text-3xl font-bold mb-5">Experience </h1>
        <span className=" font-semibold">I've more than 3 years of experiance in below technologies. </span>

        <br />
        <br />

        {/* cards design */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {
            cardItem.map(({ id, logo, name }) => (
              <div
                key={id}
                className="flex flex-col items-center justify-center border-[2px] rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 duration-300"
              >
                <img
                  src={logo}
                  className="w-[150px] p-1 rounded-full border-[2px]"
                  alt=""
                />

                <div>
                  <div className="px-2 font-bold text-xl mb-2 text-center">
                    {name}
                  </div>
                </div>

                
              </div>
            ))
          }
        </div>
      </div>

    </div>
  )
}
export default Experience;
