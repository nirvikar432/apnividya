import React from 'react'
import { motion } from 'framer-motion'

function OneGearSvg() {
    return (
        <div>
            <svg viewBox="0 0 1018 951" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                    animate={{
                        rotate: -360,
                        transition: {
                            duration: 50,
                            ease: "linear",
                            repeat: Infinity,
                            repeatType: 'mirror'
                        }

                    }}
                    d="M138.12 821.712L2.52769e-05 586.49L76.7337 546.765C87.7096 540.93 96.7638 532.36 102.901 521.996C109.038 511.632 112.021 499.875 111.52 488.019C110.755 474.627 110.755 461.205 111.52 447.813C112.51 436.038 109.995 424.237 104.258 413.733C98.5197 403.229 89.7854 394.438 79.0356 388.345L4.34861 345.731L151.677 115.324L226.62 157.938C237.31 164.137 249.618 167.419 262.173 167.419C274.729 167.419 287.037 164.137 297.727 157.938C309.748 150.738 322.218 144.226 335.07 138.437C346.476 133.379 356.157 125.427 363.025 115.475C369.893 105.522 373.676 93.964 373.948 82.0991L375.484 0L661.188 5.05574L659.398 87.6368C659.292 99.4627 662.681 111.084 669.185 121.202C675.688 131.32 685.052 139.537 696.23 144.937L714.391 154.808C720.529 158.179 726.412 161.79 732.295 165.402C742.561 172.17 754.626 176.115 767.139 176.795C779.652 177.476 792.119 174.865 803.145 169.254L879.879 129.288L1018 364.51L941.266 404.476C930.311 410.271 921.266 418.799 915.129 429.122C908.991 439.444 905.998 451.16 906.48 462.981C907.247 476.373 907.247 489.795 906.48 503.187C905.52 514.958 908.047 526.749 913.782 537.248C919.517 547.746 928.235 556.542 938.964 562.655L1013.91 605.27L866.323 835.676L791.38 793.062C780.69 786.863 768.382 783.581 755.827 783.581C743.272 783.581 730.963 786.863 720.273 793.062C708.279 800.092 695.9 806.521 683.186 812.322C671.78 817.38 662.098 825.333 655.23 835.285C648.362 845.237 644.579 856.796 644.307 868.661L642.516 951L356.812 945.944L358.602 863.364C358.719 851.568 355.333 839.975 348.825 829.893C342.317 819.811 332.947 811.641 321.77 806.303L303.354 796.433L285.705 785.598C275.376 778.847 263.254 774.933 250.696 774.295C238.139 773.657 225.64 776.321 214.599 781.987L138.12 821.712ZM388.528 663.774C428.185 686.241 474.029 697.134 520.263 695.078C566.497 693.021 611.045 678.106 648.274 652.219C685.504 626.332 713.742 590.635 729.419 549.643C745.096 508.65 747.508 464.202 736.349 421.919C725.19 379.636 700.963 341.418 666.73 312.095C632.496 282.773 589.794 263.663 544.023 257.183C498.252 250.703 451.468 257.145 409.586 275.691C367.703 294.238 332.604 324.058 308.725 361.38C276.767 411.456 267.221 471.42 282.183 528.113C297.144 584.806 335.391 633.596 388.528 663.774V663.774Z" fill="#0071B1" />
            </svg>
        </div>
    )
}

export default OneGearSvg
