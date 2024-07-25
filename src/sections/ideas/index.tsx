import H1 from '@/components/ui/typography/h1'
import Div from '../../components/ui/div'
import H3 from '@/components/ui/typography/h3'

const Ideas = () => {
    return (
        <Div>
            <div className="relative bg-ideas-union bg-no-repeat bg-cover h-620px w-full md:h700px lg:h-480px  flex flex-col lg:flex-row justify-between items-center gap-16 lg:gap-10 !z-20 bg-primary rounded-3xl overflow-hidden py-16 px-4 xl:px-20">
                {/* LEFT  */}
                <div className="flex flex-col gap-3 md:gap-6 lg:w-580wd ">
                    <H1 className='!font-medium !text-white md:text-center lg:text-start'> <span className='!font-normal'> Transforming your</span> Ideas into reality</H1>
                    <H3 className='md:text-center lg:text-start'>Let's build something extraordinary together to captivate your audience.</H3>
                </div>
                {/* RIGHT  */}
                <div className=" flex flex-col justify-center items-center gap-2 w-11/12  min-400:w-64 h-64 rounded-full border-2 border-gray-1 !mx-8 sm:mx-0">
                    <H3>Let’s Work </H3>
                    <H3>Together!</H3>
                </div>
            </div>
        </Div>
    )
}

export default Ideas