import Image from 'next/image'
import Link from 'next/link'

const ChatCard = () => {
  return (
    <>
      <div className={'message received'}>
        <Image
          src={
            'https://e7.pngegg.com/pngimages/710/450/png-clipart-computer-icons-internet-bot-axialis-iconworkshop-chatbot-end-miscellaneous-purple-thumbnail.png'
          }
          alt="perfil"
          width={15}
          height={15}
        />
        <p>
          <h1 className="font-bold text-start">
            Here are some of the options for you know about ours offers:
          </h1>
          <div className="flex flex-col justify-end items-end w-full text-end text-blue-111 font-semibold">
            <div className="flex w-full border-b-2 border-black justify-end items-end">
              <Link href="/info">
                <h2 className="py-2">Do you want to apply for a loan?</h2>
              </Link>
            </div>
            <div className="flex w-full border-b-2 border-black justify-end items-end">
              <Link href="/card/more">
                <h2 className="py-2">Loan conditions</h2>
              </Link>
            </div>
            <Link href="/card/help">
              <h2 className="pt-2">Help</h2>
            </Link>
          </div>
        </p>
      </div>
    </>
  )
}

export default ChatCard
