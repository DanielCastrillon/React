import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';


const MyDocument = ({paciente}) => {
  return (
    <Document>
    <Page size="A4">
      <View >
        <Text>{paciente.propietario}Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptatibus magni ducimus modi cupiditate magnam dolorem ad reprehenderit? Itaque corporis vel commodi repellendus quo hic exercitationem voluptatem sint, tempore dolore!
        Quidem eveniet laboriosam voluptates facilis esse iusto possimus, modi omnis unde natus minima dolorum neque dolorem corporis assumenda pariatur sunt nihil quam accusantium, officia quibusdam quaerat numquam dolore dicta. Vero.
        Quia quas perspiciatis perferendis, ea ratione accusantium sapiente accusamus voluptatibus voluptate dolore consectetur facilis ab sed omnis debitis fugiat aspernatur saepe, quaerat repudiandae natus. Corrupti sed nemo accusamus facilis doloribus!</Text>
      </View>
    </Page>
  </Document>
  )
}

export default MyDocument