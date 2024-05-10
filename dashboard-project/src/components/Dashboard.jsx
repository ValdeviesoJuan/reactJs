import React, { Component } from 'react'

export class Dashboard extends Component {
  render() {
    return (
      <section class="container px-4 mx-auto">
        <div class="flex items-center gap-x-3">
            <h2 class="text-lg font-medium text-gray-800 dark:text-white">Team members</h2>
    
            <span class="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">69 users</span>
        </div>
    
        <div class="flex flex-col mt-6">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead class="bg-gray-50 dark:bg-gray-800">
                                <tr>
                                    <th scope="col" class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        <div class="flex items-center gap-x-3">
                                            <input type="checkbox" class="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"/>
                                            <span>Name</span>
                                        </div>
                                    </th>
    
                                    <th scope="col" class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        <button class="flex items-center gap-x-2">
                                            <span>Status</span>
    
                                            <svg class="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                                                <path d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                                                <path d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z" fill="currentColor" stroke="currentColor" stroke-width="0.3" />
                                            </svg>
                                        </button>
                                    </th>
    
                                    <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        <button class="flex items-center gap-x-2">
                                            <span>Role</span>
    
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                                            </svg>
                                        </button>
                                    </th>
    
                                    <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Email address</th>
    
                                    <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Teams</th>
    
                                    <th scope="col" class="relative py-3.5 px-4">
                                        <span class="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                <tr>
                                    <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                        <div class="inline-flex items-center gap-x-3">
                                            <input type="checkbox" class="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"/>
    
                                            <div class="flex items-center gap-x-2">
                                                <img class="object-cover w-10 h-10 rounded-full" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSEhIWFRUVFRUVFRUVFRUVFRcXFhcXFxUVFhUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi4mHSUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAQMAwgMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAABQMEAQIGBwj/xAA/EAABAwIEAwUFBgUEAgMBAAABAAIRAyEEBRIxQVFhBiJxgZETMqGx8AcjQnLB0VJiorLhFIKS8SRDJTTCFf/EABoBAAMBAQEBAAAAAAAAAAAAAAACAwEEBQb/xAAkEQACAgICAgMBAAMAAAAAAAAAAQIRAyESMQRBEyJRMkKRof/aAAwDAQACEQMRAD8A6SvijA8k1ONltlDiMncGyQtabYEL4+HOL2e83CStG2W5c+pJhVcxy91M3XXZDUaKccZulfabENdYcF1QwRjBSvZyyzSlNxrRxGOxBbZJ8WSblN8dTkpbjRCeI8RUwd5OsGUnYLpzgyLSQPFXntFE9jWibKDEXMKrVzTTLQy8xLjHwA59VVZmTgb6T5coB28D6lKoMrjzRg7OhwWHhX4gJThMy1tbBaHbGdt1pRzckgVG6bEz4RFk3FoSWTnLY31KB7rrOGrsf7rgTExxi3DzW5ppJJhoyNlo9ql0oLU6Qli11S6sNFlG9olWWtsiKHyNaIiFUebq8WqF9Na0TTIXuss03ypfZqpW7hTo1VLRvXpyElq09Lk4biwUvxcE2Qy+DlF0zcOKyshoWFgUevZkBoK5dtHddJmb+4UlwxsVDyKeQ87x21AVh7wSGyoq1F1y4pqIBN0uxuJmQFyKFS7OmUrXRzeYPIKW4tpITjFU5KQZxXJJY2QBY7d6dzflH6roxq3Qq0QUwGmTJMSAII47k8o2hSMqat7RseBvaZ4/so8Fh+MeHDfmFd9jx+vNdI1NkTqduM/PmsjDiFYZSVinREIsahY+l02WkEGAT6yLjaPJNjh1DUpXB+r/APSazKIKVVwA+MfJXMDmzmOALi5sEd48ZERabX+oUbqdrKriKM+PNZphx/DrsNjGPEtcDa4B26FYfUXA0sfUw77TxgfhIg8IPErr8sxorM1AEH8QPA/sp5FJddGwp9kz6d5WwfC0e8gwttKS/wAKyX6T0zKw8LSk6FI4qydo5mqZE0qlmYsrOKsJSTEYkmyY6MGNydoqyQt6TiTdaKbDNusO+XQwA6IWwb1Qg4LOsxebd0yVFgsZLZCQYx5vCs5QTpheR8sm7YfHFKkM3YqTCq12wSU1yLBBziSrOe4JgaTtZPjU39mRyTinwPP8+zBtNpEw51gBvfj0Fiubwp1vB5RsI+C2zjMddQke73YEcpAnjNz6qXKwLkADwXpwhxjYkduhxSgKUBR0lYa1KdHQBgKmY1ZYxSaUyRhjSo6lKVZaFo5qajLKdSmq1ViZPCrVGLAsT4/DB7YO/A8il2RY52Gqkn3TDXt4G/vDkQLyn1ZiRZlS/EPA+CaLvTFmvaO6o1G1Gh7DLXXBCnauM7J5gaZNJzu6XdwOOxPAeJ+JXYCpdRlHi6GTclZuAtiFhBTxJsoZhWgJE8yV0WJw8hJqlGHQtZ2+NKNURMoEq1QowreHpiFt7O6TkLPM3o10hCm0IWWc/IfZhlTQ3ZLsubAhdPmZsucwbe87xXnZ4KMkkbhk3HZO3HmkZCr55nLnUzMidIJ3MahMfzRMdYVt2HBNwlfakMFB0kCNJbMRLXBw8dkY+akl6sJqL37PO8Ye9eYFhMTbnGyZ5e22yUBwc+f6jP0E/wAFEbr15fzRPH2XaTeavU226qi1yt0nqaKNlljVO1g5SoW739FOCYsIVEYw0H6sh4Cy3xWHkJhCJwCq1FacoXMSsZC7EHf90sxDZlN6rN0nxIgx0slQxQwbBMGSdhBi45813DZLWu5gH1XCVYBkyRNwDC7XI8SKtAECACQB04bbeC3Kr2JilTouU8QNlLUfaUsxLCDIQMZaEsWdDw3uJu7HQSFRxFWTKgrOkrQLTphijHY3wtSQpYuq+CbAVxT6OLJqToxCFlCwmdJisUCN0my6rL3KlicUZN1Bk9Y6nLzJTlL7MvGCS0dPqlcb28pucW6WucGDvQQANZsSPxe6f3XV4Bpc5L+2FPQNTmlzdMQJGnqRxvxXRgnbUqJT19TzSnuJHlCc0HWtZLW1RqJAtc7egVqjVk29eq9V7JQ0NadX/pWsM9LKZgq5SqBok8FGiw2oyrDGzcpLSzlh2n5KRuctNhz4qiiK2OQFEUq//ts/iVrDY1rxYpqAlcb7qvi8S1oAJul2Z46ox8AAyLHa/VJq+t5OupablsAf8itSFbZcx2YlztDeHL95WrrCLT9XKgp4rDtAaHtBItvfrJHxWzu8JG43WNGx/RbifeI84/Zdn2Ne32GlsyHEkEcSBx8ly2Nw8kHnbw5J92QBZraTvBH6/NZPcRUqkPcdTJFklq0iF0QqA7qtjaAIUaS2deLK46Zz5Qzdb1mQVvhqUlbejsclVjPCiynaFpREBSwl9HmTdsNKFhCyhSPGYciTChyxt11eb4UBq5KlapC83JHjorilyVj7C4oMMpR25zH2jaVNsd9xBMTBAkeVj5xwlWa9EkKjmeXt9kXO/DJBG4PT4+qPHnUkgyQvZweLwj2mOM/UqzhnR3eu6lquBJk7WEfqsYSgdQJ6+i9u9HMlTGMWBIvx8lgOBdB2+uCsBktIi+6gxVItZqAIncwZ8bqaLyJHeyuSGho3JsBzSyrUw9R4FIhzok6A4iBzjx4qy3K5HfDnjgLab8tr+as5VlbaROimQXWJcRseAAVo0Tkneuim/DgtltNttyLkeM3T/JKg02aPJR1KQA0iOsCFNlZDSVOb3RqWihnjA5wEWm6go4RsHUNQcIAiwB5deqZZgO/4qJjXNuLjkVsZUa42qENDIWU3lwDnTMS2IkQZnpZWMJRDX6RYchsOQTR1abaf0UFHDH3rIlKwUVFUitiqICYZd74t+HdVsVcdUYeqQWuHEEen/aX/ABaNjG5IaVsRBstHY9VXOJWBQdySJHocI+wqPlMcFSsqNLDmQm9JsBD/AAjnmqpGHFS0yom7rFV0LZ0tHLV6J9YQl8FCzRvxr9OzzSuC1cnTP3qv5ti44pHhK81F5MpObcimOHFHRvNrKnmzCaZHCPldbPxMKLH1zp2U8dqaY0ujiaFHSS0/xb8omU4p0gWiI5+V1Ur0g2peYJ9bfXxW+WYsd9p/DBH7fJe7F2c+VWuSN6TiDB4HwTipTaWxEyL80pbUaXnrHhKYtrfJL06Ne0iHDa2jTEjgT8JVouc6wA6n4WWGumyv4emGt1HxTJvpA6FeNIpw0+8dv3U2XNAklIji/aVnuftYMPSb/om2AqtBu5bVM1vRNmLNilT8c+mNUamg3HGOYTfMcVS0G5nmkbcUH91osNzBA9U1bFTGo0VmhzeIVOCyeUqthJpPge6/4HiP1TXEwW9Ujian6FzmyCVjAU9RZ1t85+SKh4K52fEuHJodPSTYfXJHoa6YzpYJTDDhSveoHVEiTYOUmbezCxUKjL1q4plEWjamoq7oWzXLNRspciN6ZgVELX2CwpBoxnlSyVZQZJPVPc9wJ0E8gubyt+l0c1xqFRaKQnaOmpEahOysZi9ujcJXiGuIslcVSYcDAUoQTd2bLos5lhddPU3dvH6+rlK6VMXeRDohw/wukwjYaJS3G4YU5B91wsf0PVeljl6Iwl6Yvp1O+Oo+Kv060b3ShlS9uB+SYUnSAeKskOx1g3AlZzOv3CB4BVMK4KSudRaOs+n+YVIiPsqDLWlsEbCLKiOzwBJZUeCeZJg+aduxAFtpCidjKbfecBwjj6J1om7bpClmWgEanlwm/AJkMOBso6ubUGCQ6TwEKo7tAw7Mn8vePwW3ZnxyLbqMiOs+Y2Q91h1VbC48ONgRJ4gj57q/QoyD0PzStGpifEv3XQ5IIw7OZ1T/AMikeYMvsumy6nFCmP5AfW/6qM2lRSzVy2bSJUrKd1dp0wt76MlOik3DLLsKr4hYet4kvkYorUYUTCr2IVMsuluyidomQtEJOJg7z1o9m7wXA4Zv3q7POcSNB6rjKb/vQuJy5XRbDFpHWUQ3TdR1mNUDHyIUnsxC44rY8nojJst8KWidVzyN1DVfZLWY/Q9d66OVJtlTP6IbU1MENMWiACtMG/ZN8xYKlJ3M3Hldc5hakGDwK6sUuSKro6LDM6rbGs0lrp2BuoMJVEC6t4mo32Z1XjbxV0I2KqlE1CXFzmjhpiTz34LNHKqJkkk85JJ+KZYIyLrFTBjVMR4ItsOiEZdhR/6hI4wFHXdSAhjQPJWHYc8D4rBw4TGWyq1stkjwVplYBhHqs2DYPBUMS73oO6XoCKqC9waN3ENH7rsYAEDYWHkuc7O0NVQvOzBA/M79hPqugquUMm3RpkOhD8SAqhcSoKjSj+dG8U+y+zFXVprpCTYekZTegLKmO/ZPJFLojqUlqyirRUdR0BN8aJ8mR+yCFXNdCPqNTKOeV+7K5XA1dVbwXQ5xSOglc7kw+8MrzccagzshK0dLVqmLbqX7zTJCMJEiV0rGMc2bLmvdIyTVHHPxFoSwy50ptnVANPdUODoWHNdfKo2Sj2T4Zx0pJjsNpf5AjwIkfBR9sO0zMOw0qRBqxEi4Z49U/wAblJ/0dB7Zc6lRptfzLQwd7xBn1V/GwzUeb9mSzR5cRTga4NpVt1WbHgk7Wme7ueCle5/VddWY3Q7wmKi0qzUxQ4LlGF4Mi/TZTjMCLOBg+KFEFJHQHFA8YhRuxII95If9VM6Q4zyB+a1bUefwR1MJuIWhnisZA4WSqrmEqNzOZn5LdrBsPNFIzk30dJ2RqnvsPL2h9Q1O65VXKsvdSw73xFSo2wPBoB0AjxM+i5rs522p4kBlSKdbbST3XH+Qnj0N/FLkxS1KhIZI8mrOppuWtWqoSStHFT4qy9E7Kyt066WsCstCxviLJIsHF3UVfEyqrqfVY0J+VoXjExqKFLpQpjWi/mNAGmfBcBh3htU+K7/GVwafkvOcaQKk9VzL7aNw6s6XQSLKXC16zbcEpb2swtFsPqaiODBqPrsk2YfaPNqFED+aoZP/ABb+6nDxs8n9Y/70bPNiSps6fMK0955gAGeQC4TOu2LjNPDnS3bX+I/l5BKM47QVq40veSDuBYeEDgk0r1fH8JRV5Ns4MvkXqHRvUeTJJknmvpXK3fd0z/I3+0L5nJX0R2MxvtcJQfzpsnxAg/EFdk10Qg+xZ2l7PaCa1IdzdzR+A8x/L8kmovOxv1XqLachchnfZl1MmpREs3LBu38vMdOCjPF7R1Y816kc848eXBSiOSHMBWHWXOXNi8KnWdKlaeqjqAbpgIm00/7LZJ7R3tHj7tn9TuXUDioez+UPxLp92m0950f0t69eC75tENaGNENaIACtjx3tkMuWvquyri7hfNufUPZ4mszbTVeB4ajHwhfSuIFl879uB/5+I/P/APkLoXZyS6LOSdtMRQhrz7Wn/C894flfv6yvRMlz6jiW6qbr/iYbPb4j9QvFlllQgy0kHmDB9VLJ48ZbWmVx+TKGntHvtMqfWvEMJ2lxdP3a7/8AcQ/+6U4wn2hYlvvtpvHgWn1Bj4Lll4kzoXkwfZ6u5tlWaDK5LL/tLomBWovZ1aQ8foV0GC7UYOrGiuwE8Hdw+joU3hmltDRzRfTGaythUb/EPULCTgxuR5XmPb2u4aWQxvQSfUrmsVmNSp7zyfNU0L1IYYQ/lHnSyyl2zbUgFarKoJZmVhCEG2C9j+yXHasLom9N5Hkbj9V44u8+yTMNOJdRJtUbI8W/4+SxrQJ7Pc8M9XmtlKMK9NaD1iHYrzfs3TrS4DQ/mOJ6jiuDzbAPomKjY5HcHwPFequqAAkmABJJ2AXJ55mrK00y37uY7zZLuEj+HyulljUymPJKOvR5xXzANK6Ts52fqYqKj5ZS35Fw5N6dVHgslw7KvtHaqjZJFNwgE/zO/EOkL0bLsdTqs+7Itu3iP8JI4a2ymTM6+oUcO2m0MYA1oEABRvKsVSqjirHMV8Tsvnft0P8Az8R+cf2hfRVYWXzx2+dOPxHR4H9IQjJHPoQhMICFhCAMolYQgDKFhCAMoQhAAhCEAZWEIQAK9kuYHD16VYf+t4cRzH4h5iR5qihAH0/gqwcGuaZDgCDzBEgppQevOvspzf22DFMnv0D7M/lN6Z8Ilv8AtXdvraWl3IW8eCSil6EHartF97/p2Gzb1D14NHh9bKrhaod42seC0xOTNe6TuTOrjcyVXdh3UKoY/Y+6ear6CDGXsBvwvvw35+aoYvMKlF2qg0ue0A+NxIPMEJo492eMdQPqyoYPC+0NQlxEaRblf/K01vR1WV5o3EUxUaNJ2ew+8x3Fp/Q8VM5Icqy72L9bCbiHA7OHI9eSfT8fqPFSaMRG/ZfNXairrxeIdzqvPxML6RxjopuPQ+vBfNXaD/7VfpVqD0cQhCyF6FhCYUEIQgAQhCABCEIAEIQgAQhCAMoWEIAyhYWUAdh9lmb+wxrabjDK49meWremfGbf7l7m9uotbw94/Ifqvl6jULXBzTDmkEEbggyCvo/svm4xWHpV7S9veA2DhZw8iFgyGFalBBUXaDDB1BzoktbqbzkclYxhsPFc/wBqM471HCUzd72moeTGmY84AWrZqMMqkU7tdsL8fOVF2axjHvqhs35iLsMO/uHrPKbT2QyPM234b8f+lzWW03U673s4mS3+K0D9fVPV6HZ6BQCmNSDfYqhgMUHjUFZrmQovRlGMdZscz/lfNWeOnE1zzrVT/WV9I4ZpfOo2F4+a+aMe+atQ83vPq4pkJIroQhaKCEIQAIV/Lsu9qCdWmCOE7+agxuG9m7TM7GfFIpxcuPsq8M1BZGtMroQhOSBCEIAEIQgAQhCABZWEIAF6l9iub96rhHHce1pjqLPA8tJjoV5amGQ5m7DYiliG703h0cxs5vm0keaAR9I5q7Swn0XG4fCTV9s651DrFxH6LpMxxLatOm5jpY9oeHDiHRp+BSxzjaBxFuvUjwTQ0iiLlcd2+wG53skeHtV8Snr7i217AcTff63SKqCHTf0C16HWx5hu47ULtdfoBHD4fFNHuSihUBF+Fr9Y4eKuYd8sji23px+STIvYoPxGhj3cmk+l181kyZK997VYnRhK7hv7J/roK8BWISQIQhaKCEIQA/7LmdY8CqfaFkVf9o/VGRB4frAcWgEOLQTHBpIEmNRbMA2mFnPqT/aOcQS0Q0PDXBhIAkNLgCRM/RXMoNZnL0d8s8ZeIsftP/grQhC6TgBCEIAEIQgAQhCABCEIAEIQgD0Xsdn5OENJxl9Agtm59kTPwJcPMLq8LmrXxAi9vE9PrcryDIcb7Ks1xMNPcf8AldY+lj5L0XBt9m7TyMxvN7dEyHi9Ha0XSL8IM8OSWYuh3uE+B2B/yrWGfa+0Te55/Xkpa7J5mT4Rb69UzVjJ0VMC+LchEfKPJMcvqd8j+IT6W+vBLWt0noLzPqpqNSHtPWOOxsPmka0axX9oFXRhKw5tI9bLxJe4/arSH+gqO4g0/i8D9V4clROQIQhaKCEIQA17O4Y1azaJeWMcSXkbwBeLWJ2k7Sun7WZQ9lB5pnTTa/vUwdTXBgDW1aZiRa5877zxWExb6btTHQSC07EEOEEEGxV+v2hrua9usgPjV3nGRoDCIJi4AJ4yoyjJyTXRWMo8aYpQhCsSBCEIAEIQgAQhCABCEIAEIQgAXpuWVCaFFxJJ9m2/E2O/PYLKFqGidZhnQGRxN+vdcf0CYgb+QQhUGKlcRt1UBce/0Ij/AIg/NCErGRB9qx/+NP5qf9wXhqEKaJMEIQtMBCEIAEIQgAQhCAP/2Q==" alt=""/>
                                                <div>
                                                    <h2 class="font-medium text-gray-800 dark:text-white ">Juan Carlos</h2>
                                                    <p class="text-sm font-normal text-gray-600 dark:text-gray-400">@authurmelo</p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                        <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                            <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
    
                                            <h2 class="text-sm font-normal text-emerald-500">Active</h2>
                                        </div>
                                    </td>
                                    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">Design Director</td>
                                    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">carlosjuan@example.com</td>
                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                        <div class="flex items-center gap-x-2">
                                            <p class="px-3 py-1 text-xs text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">Design</p>
                                            <p class="px-3 py-1 text-xs text-blue-500 rounded-full dark:bg-gray-800 bg-blue-100/60">Product</p>
                                            <p class="px-3 py-1 text-xs text-pink-500 rounded-full dark:bg-gray-800 bg-pink-100/60">Marketing</p>
                                        </div>
                                    </td>
                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                        <div class="flex items-center gap-x-6">
                                            <button class="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                </svg>
                                            </button>
    
                                            <button class="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
    
                                <tr>
                                    <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                        <div class="inline-flex items-center gap-x-3">
                                            <input type="checkbox" class="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"/>
    
                                            <div class="flex items-center gap-x-2">
                                                <img class="object-cover w-10 h-10 rounded-full" src="https://media.tenor.com/I2eS3ycMOEAAAAAe/amelia-watson.png" alt=""/>
                                                <div>
                                                    <h2 class="font-medium text-gray-800 dark:text-white ">Amelia Watson</h2>
                                                    <p class="text-sm font-normal text-gray-600 dark:text-gray-400">@ameliaanderson</p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                        <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                            <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
    
                                            <h2 class="text-sm font-normal text-emerald-500">Active</h2>
                                        </div>
                                    </td>
                                    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">Lead Developer</td>
                                    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">watson.amelia@example.com</td>
                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                        <div class="flex items-center gap-x-2">
                                            <p class="px-3 py-1 text-xs text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">Design</p>
                                            <p class="px-3 py-1 text-xs text-blue-500 rounded-full dark:bg-gray-800 bg-blue-100/60">Product</p>
                                            <p class="px-3 py-1 text-xs text-pink-500 rounded-full dark:bg-gray-800 bg-pink-100/60">Marketing</p>
                                        </div>
                                    </td>
                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                        <div class="flex items-center gap-x-6">
                                            <button class="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                </svg>
                                            </button>
    
                                            <button class="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
    
                                <tr>
                                    <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                        <div class="inline-flex items-center gap-x-3">
                                            <input type="checkbox" class="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"/>
    
                                            <div class="flex items-center gap-x-2">
                                                <img class="object-cover w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfXJK4BNDbO6OnH-xv9kzHPeDks9MgoxmXRv59b4XCaQ&s" alt=""/>
                                                <div>
                                                    <h2 class="font-medium text-gray-800 dark:text-white ">King Carlos</h2>
                                                    <p class="text-sm font-normal text-gray-600 dark:text-gray-400">@junior</p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                        <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                            <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
    
                                            <h2 class="text-sm font-normal text-emerald-500">Active</h2>
                                        </div>
                                    </td>
                                    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">Products Managers</td>
                                    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">king.carlos@example.com</td>
                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                        <div class="flex items-center gap-x-2">
                                            <p class="px-3 py-1 text-xs text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">Design</p>
                                            <p class="px-3 py-1 text-xs text-blue-500 rounded-full dark:bg-gray-800 bg-blue-100/60">Product</p>
                                            <p class="px-3 py-1 text-xs text-pink-500 rounded-full dark:bg-gray-800 bg-pink-100/60">Marketing</p>
                                        </div>
                                    </td>
                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                        <div class="flex items-center gap-x-6">
                                            <button class="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                </svg>
                                            </button>
    
                                            <button class="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
    
                                <tr>
                                    <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                        <div class="inline-flex items-center gap-x-3">
                                            <input type="checkbox" class="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"/>
    
                                            <div class="flex items-center gap-x-2">
                                                <img class="object-cover w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVLI0_9i8QCytOJfG3fhVEtXI53wVD9BKvVirOaYxwYA&s" alt=""/>
                                                <div>
                                                    <h2 class="font-medium text-gray-800 dark:text-white ">Juan de la Papa</h2>
                                                    <p class="text-sm font-normal text-gray-600 dark:text-gray-400">@oliviawathan</p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                        <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                            <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
    
                                            <h2 class="text-sm font-normal text-emerald-500">Active</h2>
                                        </div>
                                    </td>
                                    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">Lead Designer</td>
                                    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">juandepapa@example.com</td>
                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                        <div class="flex items-center gap-x-2">
                                            <p class="px-3 py-1 text-xs text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">Design</p>
                                            <p class="px-3 py-1 text-xs text-blue-500 rounded-full dark:bg-gray-800 bg-blue-100/60">Product</p>
                                            <p class="px-3 py-1 text-xs text-pink-500 rounded-full dark:bg-gray-800 bg-pink-100/60">Marketing</p>
                                        </div>
                                    </td>
                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                        <div class="flex items-center gap-x-6">
                                            <button class="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                </svg>
                                            </button>
    
                                            <button class="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
    
                                <tr>
                                    <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                        <div class="inline-flex items-center gap-x-3">
                                            <input type="checkbox" class="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"/>
    
                                            <div class="flex items-center gap-x-2">
                                                <img class="object-cover w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe9AYkgQrvtxdYC8jwpdNGeE1TnWizi2BMrVNt3VtmPQ&s" alt=""/>
                                                <div>
                                                    <h2 class="font-medium text-gray-800 dark:text-white ">Natumbahan</h2>
                                                    <p class="text-sm font-normal text-gray-600 dark:text-gray-400">@natumba</p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                        <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                            <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
    
                                            <h2 class="text-sm font-normal text-emerald-500">Active</h2>
                                        </div>
                                    </td>
                                    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">Graphic Designer</td>
                                    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">natumbahan@example.com</td>
                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                        <div class="flex items-center gap-x-2">
                                            <p class="px-3 py-1 text-xs text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">Design</p>
                                            <p class="px-3 py-1 text-xs text-blue-500 rounded-full dark:bg-gray-800 bg-blue-100/60">Product</p>
                                            <p class="px-3 py-1 text-xs text-pink-500 rounded-full dark:bg-gray-800 bg-pink-100/60">Marketing</p>
                                        </div>
                                    </td>
                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                        <div class="flex items-center gap-x-6">
                                            <button class="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                </svg>
                                            </button>
    
                                            <button class="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="flex items-center justify-between mt-6">
            <a href="#" class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
    
                <span>
                    previous
                </span>
            </a>
    
            <div class="items-center hidden lg:flex gap-x-3">
                <a href="#" class="px-2 py-1 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60">1</a>
                <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">2</a>
                <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">3</a>
                <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">...</a>
                <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">12</a>
                <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">13</a>
                <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">14</a>
            </div>
    
            <a href="#" class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                <span>
                    Next
                </span>
    
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            </a>
        </div>
    </section>
    )
  }
}

export default Dashboard