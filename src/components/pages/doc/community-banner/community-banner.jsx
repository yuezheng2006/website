import Image from 'next/image';
import PropTypes from 'prop-types';

import Button from 'components/shared/button';

import discordLogo from './images/discord.png';
import discourseLogo from './images/discourse.png';
import ellipse from './images/ellipse.svg';

const logos = {
  discourse: discourseLogo,
  discord: discordLogo,
};

const CommunityBanner = ({ buttonText, buttonUrl, children = null, logo }) => (
  <section className="relative my-10">
    <span className="absolute -inset-px block rounded-[10px] bg-[linear-gradient(90deg,rgba(48,50,54,1)50%,rgba(0,229,153,0.4)100%)]" />
    <span className="absolute h-px w-[28%] right-1.5 -top-px bg-[radial-gradient(circle,rgba(0,229,153,0.7)0%,rgba(0,229,153,0.05)100%)] sm:hidden" />
    <div className="relative overflow-hidden flex items-center rounded-[10px] bg-[#18191B] p-8">
      <div>
        <h2 className="!my-0 text-[26px] font-medium leading-tight text-white max-w-[334px] xs:text-2xl">
          {children}
        </h2>
        <Button
          className="mt-5 px-5 py-2 !font-semibold !text-black-new hover:bg-[#00e5bf]"
          to={buttonUrl}
          size="xs"
          theme="primary"
        >
          {buttonText}
        </Button>
      </div>
      <img
        className="absolute right-0 top-0 h-full !my-0 md:hidden"
        src={ellipse}
        alt=""
        width={324}
        height={180}
        loading="lazy"
      />
      <Image
        className="absolute right-0 top-0 h-full w-auto !my-0 [@media(max-width:550px)]:hidden"
        src={logos[logo]}
        alt=""
        width={280}
        height={180}
        quality={90}
      />
    </div>
  </section>
);

CommunityBanner.propTypes = {
  children: PropTypes.node,
  buttonText: PropTypes.string.isRequired,
  buttonUrl: PropTypes.string.isRequired,
  logo: PropTypes.oneOf(Object.keys(logos)).isRequired,
};

export default CommunityBanner;
