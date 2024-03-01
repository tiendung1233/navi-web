import { useCallback } from 'react'
import { List } from '../atoms/List'
import { Text } from '../atoms/Text'
import { BookingStepsTexts } from '../particles/DataLists'
import { AirplaneInFlight, AirplaneTilt, Buildings, MapTrifold, Receipt, Wallet,CheckCircle } from '@phosphor-icons/react'
import { Card } from '../molecules/Card'
import CardImage1 from "../../assets/thumb.jpeg"

const BookingSteps = () => {

    const renderIcons = useCallback((element: number) => {
        switch (element) {
            case 0:
                return <CheckCircle size={15} color="currentColor" weight="fill" />;
            case 1:
                return <CheckCircle size={15} color="currentColor" weight="fill" />;
            case 2:
                return <CheckCircle size={15} color="currentColor" weight="fill" />;
            default:
                return "";
        }
    }, [])

    return (
        <section className="w-full h-auto flex flex-col items-start justify-center relative lg:px-24 md:px-10 px-6 my-28 gap-5">

            <main className='w-full grid md:grid-cols-2 lg:gap-6 gap-12 md:gap-5'>
                {/* Text and Steps Container  */}
                <div className='w-full flex flex-col gap-6 order-2 md:order-1'>
                    <Text as="h1" className="lg:text-5xl md:text-3xl text-4xl text-color3 font-medium">
                        {BookingStepsTexts.secondText}
                    </Text>
                    <Text as="p" className="font-light text-base text-color3/80 tracking-widest">
                        {BookingStepsTexts.firstText}
                    </Text>
                    <Text as="p" className="font-light text-base text-color3/80 tracking-widest">
                        NAVI lets you customize shoppable Tiktok feeds with tagged products, creating a unique and eye-catching shopping experience.
                    </Text>
                    <ul className='flex flex-col gap-8 lg:mt-5 mt-3'>
                        {
                            BookingStepsTexts.listOfSteps.map((step, index) => (
                                <List className='flex gap-5 items-center justify-start' key={index}>
                                    <Text as='p' className={`text-white ${index === 0 ? "bg-color1" : index === 1 ? "bg-color1" : "bg-color1"} p-2 rounded-md`}>
                                        {renderIcons(index)}
                                    </Text>
                                    <Text as='p' className='text-sm text-color3 font-light'>
                                        {step.text}
                                    </Text>
                                </List>

                            ))
                        }
                    </ul>
                </div>
                {/* Card Container  */}
                <div className='w-full flex flex-col justify-center lg:items-center items-start relative order-1 md:order-2'>
                   <img src={CardImage1} alt="" />
                </div>
            </main>
        </section>
    )
}

export default BookingSteps