import React from 'react';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import SvgIcon from 'material-ui/SvgIcon';

const iconStyles = {
  height: '50vw',
  width: '50vw',
  margin: 'auto',
};

const HomeIcon = (props) => (
  <SvgIcon {...props}>
  <path transform="translate(-1.8861617,-168.29396)"
    d="m 253.54714,680.88709 c 0,13.23901 -11.11564,23.97135 -24.82747,23.97135 -13.71184,0 -24.82748,-10.73234 -24.82748,-23.97135 0,-13.23901 11.11564,-23.97135 24.82748,-23.97135 13.71183,0 24.82747,10.73234 24.82747,23.97135 z M 134.54649,309.33111 c 0,13.23901 -11.11564,23.97135 -24.82747,23.97135 -13.711836,0 -24.827476,-10.73234 -24.827476,-23.97135 0,-13.23901 11.11564,-23.97135 24.827476,-23.97135 13.71183,0 24.82747,10.73234 24.82747,23.97135 z m 424.63542,81.33137 c 0,13.23901 -11.11564,23.97135 -24.82747,23.97135 -13.71184,0 -24.82748,-10.73234 -24.82748,-23.97135 0,-13.23901 11.11564,-23.97135 24.82748,-23.97135 13.71183,0 24.82747,10.73234 24.82747,23.97135 z m -279.7491,360.55243 c -16.72017,-4.87519 -32.6469,-20.96353 -45.3904,-45.85103 -4.88436,-9.53895 -5.82443,-10.75247 -8.34465,-10.77196 -4.39975,-0.034 -11.72955,-3.43864 -14.25365,-6.62068 -5.78829,-7.29711 -4.24251,-16.29219 2.07632,-22.7525 1.8123,-1.85289 2.09619,-4.12793 2.09619,-5.05565 0,-0.92773 -1.2201,-6.04332 -2.71134,-11.36799 -3.23946,-11.56699 -9.18401,-38.59122 -10.20601,-46.39696 -0.40118,-3.0642 -1.06452,-6.05799 -1.47409,-6.65287 -0.49069,-0.7127 -6.23723,0.78708 -16.84895,4.3974 -30.33647,10.32106 -61.80011,18.29516 -91.298746,23.13862 -13.68628,2.24719 -48.85425,2.51088 -57.876155,0.43395 -20.7262,-4.77135 -31.9466089,-15.21756 -33.1971089,-30.90651 -0.69171,-8.67824 1.60797,-16.89154 8.1743799,-29.19485 8.671059,-16.24671 18.848649,-29.16408 37.907134,-48.11165 15.57429,-15.48365 46.62606,-41.23017 63.821956,-52.91786 l 3.72161,-2.5295 -5.42746,-3.9358 C 39.564284,404.8952 -0.15659988,357.90601 1.9751201,328.08846 c 1.79419,-25.09628 30.1723789,-36.24048 79.9149239,-31.3828 11.11992,1.08593 11.19757,1.07835 14.4973,-1.41407 10.061746,-7.60006 24.943826,-5.00003 31.386046,5.48344 2.25199,3.66466 3.41797,4.46415 8.19417,5.6186 9.20076,2.22391 35.85866,10.14391 50.42578,14.98138 7.516,2.49592 13.9225,4.30729 14.23667,4.02526 0.31418,-0.28203 1.57059,-5.86184 2.79204,-12.39958 12.36006,-66.1573 32.90642,-114.09142 57.61584,-134.41623 12.65257,-10.40743 27.11597,-13.04523 40.26771,-7.34394 12.20936,5.29276 26.59127,20.88309 37.70527,40.87336 7.8726,14.16013 18.55137,43.42193 25.18078,69 3.42313,13.20739 8.49785,37.69614 8.49785,41.00755 0,1.30593 0.49571,2.64943 1.10158,2.98556 0.60586,0.33613 8.50128,-1.84824 17.54538,-4.85416 80.63433,-26.7998 145.94914,-31.83158 171.28455,-13.19555 16.67301,12.26429 14.99478,36.83484 -4.37219,64.0123 -3.30789,4.64189 -3.99889,6.39237 -3.33563,8.44956 0.46019,1.42711 0.87972,5.78081 0.9323,9.67489 0.0858,6.33677 -0.24251,7.47795 -3.12541,10.86884 -4.55467,5.35713 -11.60424,7.96643 -19.32298,7.15208 -5.75009,-0.60666 -6.16751,-0.49189 -9.00952,2.4767 -5.32187,5.5589 -34.86495,30.00408 -48.61674,40.2275 -7.37273,5.48108 -13.405,10.35613 -13.405,10.83343 0,0.4773 3.75972,3.61515 8.35495,6.97298 13.36601,9.76686 35.75301,28.17564 45.86806,37.71715 46.53413,43.8957 64.74935,78.68996 52.73517,100.73342 -11.73891,21.53816 -52.4921,25.31029 -116.98411,10.82808 -16.44219,-3.69224 -55.55787,-15.13413 -69.54845,-20.34391 -4.55342,-1.69559 -8.63735,-2.73719 -9.07542,-2.31466 -0.43806,0.42253 -1.89779,6.84324 -3.24386,14.26824 -11.71873,64.64196 -31.44826,111.73758 -55.35417,132.13381 -3.63178,3.09859 -9.1233,6.78014 -12.20339,8.18122 -7.00029,3.18433 -17.04657,4.16236 -23.48181,2.286 z m 14.99772,-13.11916 c 26.878,-7.16514 49.87867,-55.17745 63.20835,-131.94317 1.52436,-8.77871 2.40123,-16.28521 1.94863,-16.68111 -0.45259,-0.3959 -8.0917,-3.47111 -16.97579,-6.83381 -8.88409,-3.36269 -24.77717,-10.12042 -35.31797,-15.01716 l -19.16508,-8.90317 -18.15365,8.33139 c -15.39893,7.06715 -32.56021,14.07048 -51.29492,20.93292 -3.64123,1.33377 -4.1769,1.95392 -4.173,4.83121 0.006,4.56895 2.70706,19.1811 7.26426,39.30103 5.75506,25.40837 5.86802,25.68171 11.36833,27.50559 6.02643,1.99835 9.51165,4.26041 12.21424,9.65819 2.77478,5.542 2.59418,12.25927 -1.80767,18.22796 -3.67055,4.97706 -3.77569,4.53385 4.65149,19.60826 10.14555,18.14818 20.63344,28.13625 33.1444,31.56487 4.3009,1.17866 6.91718,1.06212 13.08838,-0.583 z M 534.57894,613.55246 c 8.35672,-1.47595 17.44177,-5.92919 20.94004,-10.26423 4.52359,-5.60573 5.77995,-9.98341 5.18308,-18.06122 -1.23521,-16.71626 -16.73418,-38.96869 -46.81541,-67.21434 -17.62303,-16.5477 -61.14024,-49.73562 -64.33673,-49.06568 -0.92194,0.19321 -8.69204,5.07943 -17.26692,10.85828 -8.57495,5.77884 -23.13762,15.03972 -32.36152,20.57971 l -16.7707,10.07273 -1.3428,19.09454 c -0.73853,10.502 -2.37344,26.33247 -3.63311,35.17881 -1.25968,8.84634 -2.06205,16.28916 -1.78308,16.5396 1.29572,1.16312 30.0022,11.02281 47.54135,16.32882 48.60579,14.70439 86.65452,20.19029 110.6458,15.95298 z m -450.772506,-0.9667 c 28.224076,-3.33 65.454946,-12.69939 103.442696,-26.03205 8.36863,-2.93716 11.6539,-4.56383 11.64448,-5.76566 -0.006,-0.92079 -0.99068,-8.70848 -2.18547,-17.30598 -1.19479,-8.59749 -2.77851,-24.6259 -3.5194,-35.61868 l -1.34706,-19.98687 -6.21491,-3.29195 c -10.83776,-5.74061 -35.90461,-21.03358 -46.93726,-28.63584 -5.85451,-4.03417 -11.046,-7.33485 -11.53661,-7.33485 -1.20291,0 -7.45022,4.40111 -24.04949,16.94236 -17.147876,12.95574 -43.024196,35.52542 -54.525226,47.55764 -39.8260839,41.66548 -42.9746739,71.37989 -8.3598,78.89441 7.93259,1.72208 31.2665,2.03122 43.58805,0.57747 z M 233.19344,569.49341 c 8.40726,-3.3375 20.69046,-8.58554 27.296,-11.66229 l 12.01005,-5.5941 -10.89605,-5.0944 c -13.48709,-6.30581 -32.93947,-16.36122 -42.96439,-22.20932 -11.59081,-6.76158 -10.82324,-7.1399 -10.80108,5.32359 0.0195,10.94609 1.08764,22.86379 3.42264,38.18664 1.51677,9.95332 -0.27867,9.86737 21.93283,1.04988 z m 129.96367,1.87047 c 4.03521,-27.1404 6.02281,-51.75 4.17961,-51.75 -0.65981,0 -1.489,0.42022 -1.8426,0.93382 -1.04732,1.52119 -34.6285,19.14903 -48.76919,25.6005 -7.19173,3.28113 -13.08197,6.23103 -13.08941,6.55535 -0.0345,1.50801 53.21655,23.85404 56.93505,23.89193 1.34107,0.0137 2.00691,-1.33308 2.58654,-5.2316 z M 307.47464,535.456 c 18.21106,-8.78493 43.16322,-21.97393 55.63057,-29.40472 l 5.90485,-3.51942 0.72573,-12.11599 c 0.89603,-14.95899 0.71933,-66.26455 -0.24156,-70.14039 -0.58906,-2.37604 -3.76586,-4.53445 -19.50162,-13.25 -10.33885,-5.72638 -18.92881,-10.4116 -19.08879,-10.4116 -0.15998,0 -5.98787,-2.85014 -12.95085,-6.33365 -23.3499,-11.68171 -27.61904,-13.66635 -29.39759,-13.66635 -4.18591,0 -58.1593,27.03916 -77.59645,38.87366 -4.82981,2.94067 -5.26881,3.56376 -5.94778,8.44193 -1.33651,9.60246 -0.12967,75.93521 1.42607,78.38194 1.23949,1.94939 21.19328,13.7164 35.64792,21.02207 20.29031,10.25512 43.41906,21.23289 44.78065,21.25455 0.89357,0.0142 10.16756,-4.0952 20.60885,-9.13203 z m -30.1389,-46.60561 c -19.66649,-6.32251 -28.88043,-26.59614 -19.5286,-42.96916 4.36616,-7.64418 11.40264,-12.56812 21.17032,-14.81442 8.53906,-1.96376 13.90062,-1.3518 23.18923,2.64674 19.6057,8.43982 24.91093,32.37819 10.45185,47.16105 -7.87561,8.05196 -23.82856,11.65817 -35.2828,7.97579 z M 189.9948,460.05486 c 0,-26.56332 -0.29028,-33.4094 -1.39249,-32.84131 -8.71772,4.49319 -50.40815,32.08155 -50.40815,33.35724 0,0.44891 3.22015,3.00475 7.15589,5.67964 9.45104,6.42333 42.74332,27.14482 43.80925,27.26739 0.45952,0.0528 0.8355,-15.0055 0.8355,-33.46296 z m 217.8909,19.80902 c 12.03082,-7.5625 23.69629,-15.20775 25.92328,-16.98944 3.96771,-3.17437 4.00436,-3.27064 1.82106,-4.79255 -18.88132,-13.16199 -47.76931,-31.46801 -49.65838,-31.46801 -0.53357,0 -1.10853,15.07521 -1.27769,33.50047 -0.16914,18.42526 0.058,33.50026 0.50499,33.5 0.44689,-2.6e-4 10.65592,-6.18797 22.68674,-13.75047 z M 154.161,434.40717 c 13.4115,-8.63869 27.41442,-17.40125 31.11759,-19.47235 l 6.73304,-3.76564 0.70957,-11.02765 c 1.04481,-16.23803 2.7129,-32.46903 4.73033,-46.02765 2.67986,-18.01062 3.27548,-16.17148 -6.34275,-19.58465 -10.85117,-3.85069 -45.2383,-14.15282 -54.77431,-16.40997 l -7.42966,-1.75858 -3.43854,3.51555 c -6.79965,6.95189 -17.4256,8.79454 -25.940906,4.4984 -4.4639,-2.25213 -8.91459,-7.8851 -10.21239,-12.9252 -0.64621,-2.50962 -1.17214,-2.70534 -9.05045,-3.36806 -14.39681,-1.21104 -35.85106,-0.0249 -43.319225,2.39505 -35.7003589,11.56804 -24.97969,46.35368 29.345535,95.21825 10.13854,9.11943 25.95315,22.18321 35.143576,29.03062 24.516,18.26583 24.14117,18.03025 26.41435,16.60148 1.06132,-0.66709 12.90274,-8.28091 26.31424,-16.9196 z m 308.15337,8.64393 c 17.1126,-12.28121 27.13908,-20.23497 42.67014,-33.84881 l 12.54099,-10.99281 -0.70092,-4.74303 c -0.99714,-6.74709 0.27382,-12.56257 4.2462,-16.62394 4.60703,-4.71021 8.94894,-6.62814 15.74015,-6.17056 l 5.76235,0.38826 5.2654,-6.97317 c 11.75629,-15.56965 16.05897,-31.88495 10.9698,-41.59627 -2.95697,-5.64261 -5.65362,-7.98546 -12.89322,-11.20194 -17.95054,-7.97523 -54.35179,-6.16878 -99.1453,4.9202 -19.437,4.81179 -68.40962,19.98097 -70.46565,21.82661 -0.33034,0.29654 0.48921,8.53545 1.82122,18.3087 2.24363,16.46197 4.53455,41.7512 4.57339,50.48499 0.0159,3.56304 0.41638,3.95042 9.76395,9.44306 16.2216,9.53184 37.07648,22.85957 46.50914,29.72263 4.90157,3.56629 9.16258,6.51314 9.46893,6.54854 0.30635,0.0354 6.54939,-4.2362 13.87343,-9.49246 z m -94.08084,-46.792 c 0,-12.41074 -4.76072,-52.64522 -6.22923,-52.64522 -1.71009,0 -57.26831,24.22484 -57.26831,24.97048 0,0.29767 2.60642,1.61459 5.79205,2.92648 8.72492,3.59305 41.74761,20.74559 49.35056,25.6335 3.67617,2.3634 7.05993,4.33589 7.51945,4.38332 0.45951,0.0474 0.83548,-2.32343 0.83548,-5.26856 z m -156.13086,2.51041 c 7.32477,-4.56877 38.56853,-21.03729 48.88728,-25.76838 l 11.39656,-5.22527 -6.94059,-3.42454 c -14.57989,-7.1938 -49.59154,-21.03332 -51.52548,-20.36714 -1.56618,0.53951 -2.11931,3.55456 -4.33495,23.6297 -3.82668,34.67217 -3.79281,35.09143 2.51718,31.15563 z m 86.8051,-43.02223 c 10.30323,-4.62512 41.0262,-17.0871 55.40087,-22.47194 7.93098,-2.971 7.72054,-0.78283 2.66009,-27.66146 -10.14942,-53.90858 -26.20103,-94.63828 -44.15885,-112.04963 -8.97167,-8.69865 -15.70493,-11.93671 -24.78378,-11.91864 -7.9324,0.0158 -14.18282,2.60386 -20.93484,8.66835 -20.93723,18.8053 -38.23159,61.36046 -49.09293,120.79992 -3.12204,17.08555 -3.25539,18.43783 -1.91338,19.40214 0.66145,0.4753 9.22339,4.02533 19.02653,7.88895 9.80313,3.86361 25.59397,10.40398 35.09075,14.53415 9.49678,4.13016 17.40131,7.5466 17.56561,7.59207 0.16431,0.0455 5.17727,-2.10728 11.13993,-4.78391 z" />
  </SvgIcon>

);

const PartyIcon = () => (
  <div>
    <HomeIcon style={iconStyles} className={'icons'} viewBox={"-1 -1 574.15894 585.87042"} hoverColor={blue500}/>
  </div>
);

export default PartyIcon;