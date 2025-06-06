import { cn } from '@/lib/utils'
import { JSX } from 'react'

const SeatingPlan = (
  props: {
    date: Date
    seatClassName?: (seat: string) => string | undefined
    partyClassName?: (party: string) => string | undefined
  }
): JSX.Element => {
  const getSeatProps = (
    seat: string
  ): {
    className?: string
  } => {
    return {
      className: cn(
        'stroke-4 stroke-white fill-gray-300',
        props.seatClassName?.(seat)
      ),
    }
  }

  const getPartyProps = (
    party: string
  ): {
    className?: string
  } => {
    return {
      className: cn(
        'stroke-2 stroke-gray-300',
        props.partyClassName?.(party)
      ),
    }
  }

  if (props.date < new Date('2023-10-24')) {
    return (
      <svg className='w-full h-auto' width='448' height='140' viewBox='0 0 448 140' fill='none'>
        <g id='seatplan-2018-10-30'>
          <path {...getPartyProps('piraten')} d='M364 88C364 94.6274 369.373 100 376 100H400C406.627 100 412 94.6274 412 88C412 81.3726 406.627 76 400 76H376C369.373 76 364 81.3726 364 88Z' />
          <path {...getPartyProps('deilenk')} d='M372 120C372 126.627 377.373 132 384 132H408C414.627 132 420 126.627 420 120C420 113.373 414.627 108 408 108H384C377.373 108 372 113.373 372 120Z' />
          <path {...getPartyProps('dp')} d='M280 44C280 50.6274 285.373 56 292 56H412C418.627 56 424 50.6274 424 44C424 42.5975 423.759 41.2511 423.317 40L415.128 15.5C413.348 11.1023 409.036 8 404 8H308C303.826 8 300.15 10.3799 298 13.6408L281.605 38C280.584 39.765 280 41.8143 280 44Z' />
          <path {...getPartyProps('csv')} d='M100 116C100 122.627 105.373 128 112 128H352C358.627 128 364 122.627 364 116C364 114.597 363.759 113.251 363.317 112L355.128 87.5C353.348 83.1023 349.036 80 344 80H128C123.826 80 120.15 82.3799 118 85.6408L101.605 110C100.584 111.765 100 113.814 100 116Z' />
          <path {...getPartyProps('adr')} d='M32 116C32 122.627 37.3726 128 44 128H68C74.6274 128 80 122.627 80 116C80 114.597 79.7594 113.251 79.3172 112L71.1277 87.5C69.3476 83.1023 65.0361 80 60 80C55.8261 80 52.1498 82.3799 50 85.6408L33.6054 110C32.5844 111.765 32 113.814 32 116Z' />
          <rect {...getPartyProps('dp')} x='8' y='60' width='24' height='24' rx='12' />
          <rect {...getPartyProps('liberte')} x='80' y='80' width='24' height='24' rx='12' />
          <path {...getPartyProps('lsap')} d='M280 20C280 14 274.627 8 268 8H172C167.826 8 164.15 10.3799 162 13.6408L145.605 38C144.584 39.765 144 41.8143 144 44C144 50.6274 149.373 56 156 56H180H252C258 56 259.57 54.0281 261.748 51C267.832 42.8333 280 26 280 20Z' />
          <path {...getPartyProps('deigreng')} d='M132 8.00001L36 8C29.3726 8 24 14 24 20C24 26 33.0881 49 33.0881 49C34.9841 53.1311 38 56 44 56H116C122 56 123.57 54.0281 125.748 51C131.832 42.8333 144 26 144 20C144 14 138.627 8.00001 132 8.00001Z' />
          <rect {...getSeatProps('15')} x='400' y='112' width='16' height='16' rx='8' />
          <rect {...getSeatProps('14')} x='376' y='112' width='16' height='16' rx='8' />
          <rect {...getSeatProps('13')} x='344' y='108' width='16' height='16' rx='8' />
          <rect {...getSeatProps('12')} x='320' y='108' width='16' height='16' rx='8' />
          <rect {...getSeatProps('11')} x='296' y='108' width='16' height='16' rx='8' />
          <rect {...getSeatProps('10')} x='272' y='108' width='16' height='16' rx='8' />
          <rect {...getSeatProps('9')} x='248' y='108' width='16' height='16' rx='8' />
          <rect {...getSeatProps('8')} x='224' y='108' width='16' height='16' rx='8' />
          <rect {...getSeatProps('7')} x='200' y='108' width='16' height='16' rx='8' />
          <rect {...getSeatProps('6')} x='176' y='108' width='16' height='16' rx='8' />
          <rect {...getSeatProps('5')} x='152' y='108' width='16' height='16' rx='8' />
          <rect {...getSeatProps('4')} x='128' y='108' width='16' height='16' rx='8' />
          <rect {...getSeatProps('3')} x='104' y='108' width='16' height='16' rx='8' />
          <rect {...getSeatProps('2')} x='60' y='108' width='16' height='16' rx='8' />
          <rect {...getSeatProps('1')} x='36' y='108' width='16' height='16' rx='8' />
          <rect {...getSeatProps('30')} x='392' y='80' width='16' height='16' rx='8' />
          <rect {...getSeatProps('29')} x='368' y='80' width='16' height='16' rx='8' />
          <rect {...getSeatProps('28')} x='336' y='84' width='16' height='16' rx='8' />
          <rect {...getSeatProps('27')} x='312' y='84' width='16' height='16' rx='8' />
          <rect {...getSeatProps('26')} x='288' y='84' width='16' height='16' rx='8' />
          <rect {...getSeatProps('25')} x='264' y='84' width='16' height='16' rx='8' />
          <rect {...getSeatProps('24')} x='240' y='84' width='16' height='16' rx='8' />
          <rect {...getSeatProps('23')} x='216' y='84' width='16' height='16' rx='8' />
          <rect {...getSeatProps('22')} x='192' y='84' width='16' height='16' rx='8' />
          <rect {...getSeatProps('21')} x='168' y='84' width='16' height='16' rx='8' />
          <rect {...getSeatProps('20')} x='144' y='84' width='16' height='16' rx='8' />
          <rect {...getSeatProps('19')} x='120' y='84' width='16' height='16' rx='8' />
          <rect {...getSeatProps('18')} x='84' y='84' width='16' height='16' rx='8' />
          <rect {...getSeatProps('17')} x='52' y='84' width='16' height='16' rx='8' />
          <rect {...getSeatProps('48')} x='404' y='36' width='16' height='16' rx='8' />
          <rect {...getSeatProps('47')} x='380' y='36' width='16' height='16' rx='8' />
          <rect {...getSeatProps('45')} x='356' y='36' width='16' height='16' rx='8' />
          <rect {...getSeatProps('44')} x='332' y='36' width='16' height='16' rx='8' />
          <rect {...getSeatProps('43')} x='308' y='36' width='16' height='16' rx='8' />
          <rect {...getSeatProps('42')} x='284' y='36' width='16' height='16' rx='8' />
          <rect {...getSeatProps('41')} x='244' y='36' width='16' height='16' rx='8' />
          <rect {...getSeatProps('40')} x='220' y='36' width='16' height='16' rx='8' />
          <rect {...getSeatProps('39')} x='196' y='36' width='16' height='16' rx='8' />
          <rect {...getSeatProps('38')} x='172' y='36' width='16' height='16' rx='8' />
          <rect {...getSeatProps('37')} x='148' y='36' width='16' height='16' rx='8' />
          <rect {...getSeatProps('36')} x='108' y='36' width='16' height='16' rx='8' />
          <rect {...getSeatProps('35')} x='84' y='36' width='16' height='16' rx='8' />
          <rect {...getSeatProps('34')} x='60' y='36' width='16' height='16' rx='8' />
          <rect {...getSeatProps('33')} x='36' y='36' width='16' height='16' rx='8' />
          <rect {...getSeatProps('63')} x='396' y='12' width='16' height='16' rx='8' />
          <rect {...getSeatProps('62')} x='372' y='12' width='16' height='16' rx='8' />
          <rect {...getSeatProps('61')} x='348' y='12' width='16' height='16' rx='8' />
          <rect {...getSeatProps('60')} x='324' y='12' width='16' height='16' rx='8' />
          <rect {...getSeatProps('59')} x='300' y='12' width='16' height='16' rx='8' />
          <rect {...getSeatProps('58')} x='260' y='12' width='16' height='16' rx='8' />
          <rect {...getSeatProps('57')} x='236' y='12' width='16' height='16' rx='8' />
          <rect {...getSeatProps('56')} x='212' y='12' width='16' height='16' rx='8' />
          <rect {...getSeatProps('55')} x='188' y='12' width='16' height='16' rx='8' />
          <rect {...getSeatProps('54')} x='164' y='12' width='16' height='16' rx='8' />
          <rect {...getSeatProps('53')} x='124' y='12' width='16' height='16' rx='8' />
          <rect {...getSeatProps('52')} x='100' y='12' width='16' height='16' rx='8' />
          <rect {...getSeatProps('51')} x='76' y='12' width='16' height='16' rx='8' />
          <rect {...getSeatProps('50')} x='52' y='12' width='16' height='16' rx='8' />
          <rect {...getSeatProps('49')} x='28' y='12' width='16' height='16' rx='8' />
          <rect {...getSeatProps('0')} x='12' y='64' width='16' height='16' rx='8' />
        </g>
      </svg>
    )
  }

  return (
    <svg className='w-full h-auto' width='448' height='140' viewBox='0 0 448 140' fill='none'>
      <path {...getPartyProps('piraten')} d='M44 88C44 94.6274 49.3726 100 56 100H80C86.6274 100 92 94.6274 92 88C92 81.3726 86.6274 76 80 76H56C49.3726 76 44 81.3726 44 88Z' />
      <path {...getPartyProps('deilenk')} d='M32 120C32 126.627 37.3726 132 44 132H68C74.6274 132 80 126.627 80 120C80 113.373 74.6274 108 68 108H44C37.3726 108 32 113.373 32 120Z' />
      <rect {...getPartyProps('csv')} x='8' y='60' width='24' height='24' rx='12' />
      <path {...getPartyProps('lsap')} d='M256 20C256 14 250.627 8 244 8H124C119.826 8 116.15 10.3799 114 13.6408L97.6054 38C96.5844 39.765 96 41.8143 96 44C96 50.6274 101.373 56 108 56H132H228C234 56 235.57 54.0281 237.748 51C243.832 42.8333 256 26 256 20Z' />
      <path {...getPartyProps('csv')} d='M408 92C408 86 402.627 80 396 80H180C175.826 80 172.15 82.3799 170 85.6408L153.605 110C152.584 111.765 152 113.814 152 116C152 122.627 157.373 128 164 128H188H380C386 128 387.57 126.028 389.748 123C395.832 114.833 408 98 408 92Z' />
      <path {...getPartyProps('deigreng')} d='M152 92C152 86 146.627 80 140 80H116C111.826 80 108.15 82.3799 106 85.6408L89.6054 110C88.5844 111.765 88 113.814 88 116C88 122.627 93.3726 128 100 128H124C130 128 131.57 126.028 133.748 123C139.832 114.833 152 98 152 92Z' />
      <path {...getPartyProps('dp')} d='M440 20C440 14 434.627 8 428 8H284C279.826 8 276.15 10.3799 274 13.6408L257.605 38C256.584 39.765 256 41.8143 256 44C256 50.6274 261.373 56 268 56H292H412C418 56 419.57 54.0281 421.748 51C427.832 42.8333 440 26 440 20Z' />
      <path {...getPartyProps('adr')} d='M84 8.00001L36 8C29.3726 8 24 14 24 20C24 26 33.0881 49 33.0881 49C34.9841 53.1311 38 56 44 56H68C74 56 75.5695 54.0281 77.7479 51C83.8319 42.8333 96 26 96 20C96 14 90.6274 8.00001 84 8.00001Z' />
      <rect {...getSeatProps('14')} x='372' y='108' width='16' height='16' rx='8' />
      <rect {...getSeatProps('13')} x='348' y='108' width='16' height='16' rx='8' />
      <rect {...getSeatProps('12')} x='324' y='108' width='16' height='16' rx='8' />
      <rect {...getSeatProps('11')} x='300' y='108' width='16' height='16' rx='8' />
      <rect {...getSeatProps('10')} x='276' y='108' width='16' height='16' rx='8' />
      <rect {...getSeatProps('9')} x='252' y='108' width='16' height='16' rx='8' />
      <rect {...getSeatProps('8')} x='228' y='108' width='16' height='16' rx='8' />
      <rect {...getSeatProps('7')} x='204' y='108' width='16' height='16' rx='8' />
      <rect {...getSeatProps('6')} x='180' y='108' width='16' height='16' rx='8' />
      <rect {...getSeatProps('5')} x='156' y='108' width='16' height='16' rx='8' />
      <rect {...getSeatProps('4')} x='116' y='108' width='16' height='16' rx='8' />
      <rect {...getSeatProps('3')} x='92' y='108' width='16' height='16' rx='8' />
      <rect {...getSeatProps('2')} x='60' y='112' width='16' height='16' rx='8' />
      <rect {...getSeatProps('1')} x='36' y='112' width='16' height='16' rx='8' />
      <rect {...getSeatProps('30')} x='388' y='84' width='16' height='16' rx='8' />
      <rect {...getSeatProps('29')} x='364' y='84' width='16' height='16' rx='8' />
      <rect {...getSeatProps('28')} x='340' y='84' width='16' height='16' rx='8' />
      <rect {...getSeatProps('27')} x='316' y='84' width='16' height='16' rx='8' />
      <rect {...getSeatProps('26')} x='292' y='84' width='16' height='16' rx='8' />
      <rect {...getSeatProps('25')} x='268' y='84' width='16' height='16' rx='8' />
      <rect {...getSeatProps('24')} x='244' y='84' width='16' height='16' rx='8' />
      <rect {...getSeatProps('23')} x='220' y='84' width='16' height='16' rx='8' />
      <rect {...getSeatProps('22')} x='196' y='84' width='16' height='16' rx='8' />
      <rect {...getSeatProps('21')} x='172' y='84' width='16' height='16' rx='8' />
      <rect {...getSeatProps('20')} x='132' y='84' width='16' height='16' rx='8' />
      <rect {...getSeatProps('19')} x='108' y='84' width='16' height='16' rx='8' />
      <rect {...getSeatProps('18')} x='72' y='80' width='16' height='16' rx='8' />
      <rect {...getSeatProps('17')} x='48' y='80' width='16' height='16' rx='8' />
      <rect {...getSeatProps('47')} x='404' y='36' width='16' height='16' rx='8' />
      <rect {...getSeatProps('46')} x='380' y='36' width='16' height='16' rx='8' />
      <rect {...getSeatProps('45')} x='356' y='36' width='16' height='16' rx='8' />
      <rect {...getSeatProps('44')} x='332' y='36' width='16' height='16' rx='8' />
      <rect {...getSeatProps('43')} x='308' y='36' width='16' height='16' rx='8' />
      <rect {...getSeatProps('42')} x='284' y='36' width='16' height='16' rx='8' />
      <rect {...getSeatProps('41')} x='260' y='36' width='16' height='16' rx='8' />
      <rect {...getSeatProps('40')} x='220' y='36' width='16' height='16' rx='8' />
      <rect {...getSeatProps('39')} x='196' y='36' width='16' height='16' rx='8' />
      <rect {...getSeatProps('38')} x='172' y='36' width='16' height='16' rx='8' />
      <rect {...getSeatProps('37')} x='148' y='36' width='16' height='16' rx='8' />
      <rect {...getSeatProps('36')} x='124' y='36' width='16' height='16' rx='8' />
      <rect {...getSeatProps('35')} x='100' y='36' width='16' height='16' rx='8' />
      <rect {...getSeatProps('34')} x='60' y='36' width='16' height='16' rx='8' />
      <rect {...getSeatProps('33')} x='36' y='36' width='16' height='16' rx='8' />
      <rect {...getSeatProps('64')} x='420' y='12' width='16' height='16' rx='8' />
      <rect {...getSeatProps('63')} x='396' y='12' width='16' height='16' rx='8' />
      <rect {...getSeatProps('62')} x='372' y='12' width='16' height='16' rx='8' />
      <rect {...getSeatProps('61')} x='348' y='12' width='16' height='16' rx='8' />
      <rect {...getSeatProps('60')} x='324' y='12' width='16' height='16' rx='8' />
      <rect {...getSeatProps('59')} x='300' y='12' width='16' height='16' rx='8' />
      <rect {...getSeatProps('58')} x='276' y='12' width='16' height='16' rx='8' />
      <rect {...getSeatProps('57')} x='236' y='12' width='16' height='16' rx='8' />
      <rect {...getSeatProps('56')} x='212' y='12' width='16' height='16' rx='8' />
      <rect {...getSeatProps('55')} x='188' y='12' width='16' height='16' rx='8' />
      <rect {...getSeatProps('54')} x='164' y='12' width='16' height='16' rx='8' />
      <rect {...getSeatProps('53')} x='140' y='12' width='16' height='16' rx='8' />
      <rect {...getSeatProps('52')} x='116' y='12' width='16' height='16' rx='8' />
      <rect {...getSeatProps('51')} x='76' y='12' width='16' height='16' rx='8' />
      <rect {...getSeatProps('50')} x='52' y='12' width='16' height='16' rx='8' />
      <rect {...getSeatProps('49')} x='28' y='12' width='16' height='16' rx='8' />
      <rect {...getSeatProps('0')} x='12' y='64' width='16' height='16' rx='8' />
    </svg>
  )
}

export default SeatingPlan
