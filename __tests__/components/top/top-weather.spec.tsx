import { TopWeather } from '@/components/top'
import { render, screen } from '@testing-library/react'
import * as NextRouter from 'next/router'

const useRouterSpy = jest.spyOn(NextRouter, 'useRouter')

describe('TopWeather', () => {
  beforeEach(() => {
    ;(useRouterSpy as jest.Mock).mockReturnValue({})
  })

  describe('初期状態', () => {
    test('見出しが表示されていること', () => {
      render(<TopWeather />)
      expect(screen.getByRole('heading', { name: 'weather-app' })).toBeTruthy()
      expect(screen.getByRole('heading', { name: '現在の天気' })).toBeTruthy()
      expect(screen.getByRole('heading', { name: '週間予報' })).toBeTruthy()
    })

    test('inputが表示されていること', () => {
      render(<TopWeather />)
      expect(
        screen.getByRole('textbox', { name: '地名または緯度経度' })
      ).toBeTruthy()
    })
  })
})