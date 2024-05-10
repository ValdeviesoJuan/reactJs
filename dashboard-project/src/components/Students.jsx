import React, { Component } from 'react'

export class Students extends Component {
  render() {
    return (
      <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-8 mx-auto w-[1320px]">
            <h2 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Juan Carlos' Team</h2>
    
            <div class="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div class="w-full max-w-xs text-center">
                    <img class="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://scontent.fmnl13-2.fna.fbcdn.net/v/t1.18169-9/207048_204431546243664_3786400_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHuVn_XlBD6Mae5wjwHiWva0J7zHGvB6mnQnvMca8Hqab_0LyAGWuAzDJMZ0E3WNxL6qVcNp6Q1pOKPqMUYKIam&_nc_ohc=7cvuCM0DxQ0Q7kNvgGDRDXz&_nc_ht=scontent.fmnl13-2.fna&oh=00_AYCPCV0ew7ffMABGoJDV_BMgk2gyYnBh5oI3A1cRfB_Sxw&oe=66650F85" alt="avatar" />
    
                    <div class="mt-2">
                        <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">Juan Carlos</h3>
                        <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">CEO</span>
                    </div>
                </div>
    
                <div class="w-full max-w-xs text-center">
                    <img class="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://scontent.fmnl13-2.fna.fbcdn.net/v/t1.6435-9/70514775_2669498953074896_6572408081622237184_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGDfkZlTaIBJA2fW-e5OA52aSz9rAeVmyBpLP2sB5WbIIwXKhRDY1JF4CkB_iyO7W6QW9-QLGLIdDK1AS9WLMFs&_nc_ohc=M6LMlZcMFtQQ7kNvgF_QcAy&_nc_ht=scontent.fmnl13-2.fna&oh=00_AYB5upKy7bufm7Q7uqmRgxL8BRq6NnYUTCq3zlYx1qzKsQ&oe=6664F31F" alt="avatar" />
    
                    <div class="mt-2">
                        <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">Juan Carlos</h3>
                        <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">Co-founder</span>
                    </div>
                </div>
    
                <div class="w-full max-w-xs text-center">
                    <img class="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://scontent.fmnl13-2.fna.fbcdn.net/v/t1.18169-9/557438_3522773559376_1821515136_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG6vZJ9LIjfpXhT0-WjEehVxf-Cspn6AlHF_4KymfoCUZLftM4euEnwiRU8lVEWCS0_wt-u_KCCc45ZxirQqp9J&_nc_ohc=rem-yB80X68Q7kNvgHgwCpQ&_nc_ht=scontent.fmnl13-2.fna&oh=00_AYAK7WKTEnuoVqk85jA41im8Ezo46jlTTv1f1_Qf9zkWHA&oe=66651373" alt="avatar" />
    
                    <div class="mt-2">
                        <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">Juan Carlos</h3>
                        <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">UI/UX</span>
                    </div>
                </div>
    
                <div class="w-full max-w-xs text-center">
                    <img class="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://scontent.fmnl13-1.fna.fbcdn.net/v/t39.30808-1/354573534_6640397162651235_745040095710066959_n.jpg?stp=dst-jpg_s200x200&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEiYW5LIAMcKQ7lsnHi_W2yqdSNK-qsK_yp1I0r6qwr_MiL8v1p45nIm732z5ANSejjNBlJ3z17J5dDlautxpps&_nc_ohc=TzCzXtyhLUcQ7kNvgGGJfcy&_nc_ht=scontent.fmnl13-1.fna&oh=00_AYCDsB2HdiUuM8B5UmNeziNouBWcPgwaVkXwezQ_l_okBQ&oe=66436E58" alt="avatar" />
    
                    <div class="mt-2">
                        <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">Juan Carlos</h3>
                        <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">Software Engineer</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
  }
}

export default Students