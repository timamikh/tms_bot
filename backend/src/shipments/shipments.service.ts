import { Injectable } from '@nestjs/common';

@Injectable()
export class ShipmentsService {
  // Заглушка для получения списка рейсов
  async getAllShipments() {
    // Имитация задержки запроса к БД
    await new Promise(resolve => setTimeout(resolve, 300));
    
    return {
      success: true,
      data: [
        {
          id: 1,
          number: 'TMS-2024-001',
          route: 'Москва → Санкт-Петербург',
          driver: 'Иванов Иван Иванович',
          truck: 'А123АА77',
          trailer: 'ВС456ВС77',
          container: 'MSCU1234567',
          seal: 'SL-789456',
          loadingDate: '30.10.2024 10:00',
          loadingPlace: 'Склад №5, г. Москва, ул. Промышленная, д. 10',
          status: 'В пути',
          statusColor: '#10b981'
        },
        {
          id: 2,
          number: 'TMS-2024-002',
          route: 'Екатеринбург → Новосибирск',
          driver: 'Петров Петр Петрович',
          truck: 'В789ВВ66',
          trailer: 'СМ123СМ66',
          container: 'TCLU9876543',
          seal: 'SL-123789',
          loadingDate: '30.10.2024 14:30',
          loadingPlace: 'Терминал "Восток", г. Екатеринбург, Объездная дорога, д. 25',
          status: 'Ожидает погрузки',
          statusColor: '#f59e0b'
        }
      ],
    };
  }
}

