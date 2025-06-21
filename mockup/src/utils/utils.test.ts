import { expect, test, jest, beforeEach, afterEach } from '@jest/globals';
import { showPromotionBanner } from "./utils";

// Мокируем глобальную функцию alert
const mockAlert = jest.fn();
global.alert = mockAlert;

describe('showPromotionBanner', () => {
  beforeEach(() => {
    // Включаем мокирование таймеров перед каждым тестом
    jest.useFakeTimers();
    // Очищаем все вызовы мока alert
    mockAlert.mockClear();
  });

  afterEach(() => {
    // Восстанавливаем настоящие таймеры после каждого теста
    jest.useRealTimers();
  });

  test('должна показать alert с корректным текстом через 15 секунд', () => {
    const testMessage = 'Специальное предложение!';
    
    // Вызываем функцию
    showPromotionBanner(testMessage);
    
    // Проверяем, что alert еще не был вызван (прошло 0 секунд)
    expect(mockAlert).not.toHaveBeenCalled();
    
    // Перематываем время на 14 секунд - alert все еще не должен быть вызван
    jest.advanceTimersByTime(14000);
    expect(mockAlert).not.toHaveBeenCalled();
    
    // Перематываем время еще на 1 секунду (итого 15 секунд)
    jest.advanceTimersByTime(1000);
    
    // Теперь alert должен быть вызван с правильным сообщением
    expect(mockAlert).toHaveBeenCalledTimes(1);
    expect(mockAlert).toHaveBeenCalledWith(testMessage);
  });

  test('должна работать с разными текстами сообщений', () => {
    const messages = ['Скидка 50%!', 'Новый товар в наличии', 'Акция заканчивается'];
    
    // Вызываем функцию для каждого сообщения
    messages.forEach(message => {
      showPromotionBanner(message);
    });
    
    // Перематываем время на 15 секунд
    jest.advanceTimersByTime(15000);
    
    // Проверяем, что alert был вызван для каждого сообщения
    expect(mockAlert).toHaveBeenCalledTimes(messages.length);
    
    // Проверяем, что каждое сообщение было передано в alert
    messages.forEach((message, index) => {
      expect(mockAlert).toHaveBeenNthCalledWith(index + 1, message);
    });
  });

  test('не должна вызывать alert до истечения 15 секунд', () => {
    showPromotionBanner('Тестовое сообщение');
    
    // Проверяем через разные промежутки времени
    const timeIntervals = [1000, 5000, 10000, 14999];
    
    timeIntervals.forEach(time => {
      jest.advanceTimersByTime(time - (jest.now() as number));
      expect(mockAlert).not.toHaveBeenCalled();
    });
  });
});