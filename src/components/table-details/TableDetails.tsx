import { Table, Title } from "@mantine/core";
import { TableData } from "./TableDetails.types";

export default function TableDetails({ data }: { data: TableData }) {
  return (
    <>
      <Title>Детали</Title>
      <Table>
        <tbody>
          <tr>
            <td>Страна</td>
            <td>{data.country}</td>
          </tr>
          <tr>
            <td>Год</td>
            <td>{data.year}</td>
          </tr>
          <tr>
            <td>Жанр</td>
            <td>{data.genres}</td>
          </tr>
          <tr>
            <td>Режиссер</td>
            <td>{data.directors}</td>
          </tr>
          <tr>
            <td>Сценарий</td>
            <td>{data.writers}</td>
          </tr>
          <tr>
            <td>Бюджет</td>
            <td>{data.budget}</td>
          </tr>
          <tr>
            <td>Доход</td>
            <td>{data.revenue}</td>
          </tr>
          <tr>
            <td>Время</td>
            <td>{data.runtime}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
