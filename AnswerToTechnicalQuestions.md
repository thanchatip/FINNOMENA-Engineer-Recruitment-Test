## Answer to Technical questions

1. ใช้เวลาทำแบบทดสอบไปเท่าไร ถ้ามีเวลามากกว่านี้จะทำอะไรเพิ่ม ถ้าใช้เวลาน้อยในการทำโจทย์สามารถใช้โอกาสนี้ในการอธิบายได้ว่าอยากเพิ่มอะไร หรือแก้ไขในส่วนไหน
- ใช้เวลา 4 วัน ถ้ามีเวลาจะทำการสร้างฟังก์ชันให้ลูกค้าสามารถกดเพิ่มรายการกองทุนที่ถูกใจเก็บไว้ได้ และทำการตกแต่งหน้าจอuiให้สวยงามกว่าเดิม

2. อะไรคือ feature ที่นำเข้ามาใช้ในการพัฒนา application นี้ กรุณาแนบ code snippet มาด้วยว่าใช้อย่างไร ในส่วนไหน
- ใช้ fetch ในการเรียก api (localhost port ของ nodejs ที่สร้างขึ้นมาเผื่อไปเรียก api ที่ได้มา) โดยใช้ชื่อฟังก์ชัน getFundsByRange และ ใช้ฟังก์ชันเพื่อเก็บข้อมูลลงในตัวแปรที่จะนำไปใช้แสดงตาราง
<img width="746" alt="image" src="https://user-images.githubusercontent.com/22288904/152988035-92186e90-3c6f-416c-96d3-7aff1844e052.png">
<img width="620" alt="image" src="https://user-images.githubusercontent.com/22288904/152988338-a6695144-736a-49b2-99cd-658cba904ae8.png">

- ใช้ nodejs(express.js) ในการเรียก api จาก localhost เพราะไม่สามารถเรียก api ได้ตรงๆจาก localhost ของ vue (browser) โดยจะรับพารามิเตอร์จาก หน้าเว็บมาชื่อ period เพื่อนำไป fetch ข้อมูลตามระยะเวลาที่ลูกค้าเลือกดู
<img width="731" alt="image" src="https://user-images.githubusercontent.com/22288904/152989057-22849216-e17c-4f29-b3ce-8a35c713e11c.png">
จากรูปจะเรียกไปที่ localhost:3000/get-funds-by-range เพื่อต่อกับnodejs
<img width="1166" alt="image" src="https://user-images.githubusercontent.com/22288904/152989150-b82a4d41-6afc-4d08-886b-4f057fb68238.png">
จากรูปคือ nodejs รับ request มาเพื่อ fetch ข้อมูลกลับมาตาม req.query.period

- ใช้ cors ร่วมกับ express.js เพื่อให้สามารถเรียก api ได้สำเร็จ ประกาศใช้ดังภาพในไฟล์ `call-api-services.js`
<img width="385" alt="image" src="https://user-images.githubusercontent.com/22288904/152989976-cf9a52bc-dd33-4bb5-83c5-54893831998a.png">

- ใช้ vue filter ในการแปลงวันที่(ใช้ function date ของ javascript จากไฟล์ `filters/toThaiDateString.js`) จากข้อมูลที่ได้มาเป็นวันที่ภาษาไทย
<img width="568" alt="image" src="https://user-images.githubusercontent.com/22288904/152990778-a2eaa8ee-cd7b-456f-a63d-665424d8cbf8.png">
การประกาศใช้ vue filter ในไฟล์  `main.js`
<img width="637" alt="image" src="https://user-images.githubusercontent.com/22288904/152990866-999c2f2e-ce15-4e4b-85dc-8a0a4e71cd2a.png">
การใช้งานในการแสดงข้อมูลวันที่ โดยการใช้ filter จะทำโดย {{ ตัวแปรที่อยากแปลงค่า | filterที่ต้องการ }}


- ใช้ cypress ในการทำเทสเช็ดการกดปุ่มและการโหลดข้อมูลมาแสดงหน้าเว็บ แบ่งเป็น 3 ส่วน คือตรวจสอบการโหลดหน้าเว็บ การกดปุ่มเลือกเวลา และการเรียก api
<img width="618" alt="image" src="https://user-images.githubusercontent.com/22288904/153002550-c56ab9cd-a08a-4708-a13c-d504ad440a89.png">
จากภาพ cy.vist คือการเรียก url ที่เราต้องการจะทดสอบ(ในที่นี้คือ localhost ของ vue) และ cy.get คือการตรวจสอบว่ามี element ที่ต้องการหรือไม่ (ในที่นี้คือตาราง) cy.constrains คือการหาelement ที่มีค่าที่เราต้องการ click() คือการกดเลือก cy.request คือการทดสอบเรียก api และใช้ cy.get ตารางเพื่อตรวจสอบว่ามีข้อมูลส่งกลับมาหรือไม่



3. เราจะสามารถติดตาม performance issue บน production ได้อย่างไร เคยมีประสบการณ์ด้านนี้ไหม
- ใช้ kibana ในการเก็บ log และเมื่อเกิด issue ขึ้นจะนำ error ไปเสิร์ชเผื่อหาช่วงเวลาที่เกิด error
- ไม่เคยมีประสบการณ์ในด้านนี้

4. อยากปรับปรุง FINNOMENA APIs ที่ใช้ในการพัฒนา ในส่วนไหนให้ดียิ่งขึ้น
- อนุญาตโดเมนของclient (หน้าเว็บ) เข้าถึงข้อมูลได้โดยใช้ Access-Control-Allow-Origin: ‘ชื่อโดเมนของเรา’ ซึ่งอาจช่วนลดงานในฝั่งของหน้าเว็บที่ต้องสร้างตัวกลางในการเรียก api ผ่านการใช้ nodejs (ซึ่งในการทำงานครั้งนี้เรียกapiไปที่localhost ของ node จากนั้นจึงเชื่อมไปยัง api ที่ได้รับมา)

