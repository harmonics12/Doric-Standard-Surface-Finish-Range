import { NextResponse } from 'next/server';
import { renderToStream, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { paintFinishes } from '@/lib/colors';
import React from 'react';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 30,
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  colorGroup: {
    marginBottom: 30,
  },
  colorItem: {
    marginBottom: 15,
  },
});

const MyDocument: React.FC = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Doric Standard Surface Finish Range</Text>
        <Text style={styles.text}>
          Premium architectural finishes engineered for superior durability and exceptional aesthetics.
          Trusted by leading window fabricators and installers across Australia since 1972.
        </Text>
      </View>
      
      {paintFinishes.map((group, index) => (
        <View key={group.name} style={styles.colorGroup}>
          <Text style={styles.subtitle}>{index + 1}. {group.name}</Text>
          <Text style={styles.text}>{group.description}</Text>
          
          {group.finishes.map((finish) => (
            <View key={finish.code} style={styles.colorItem}>
              <Text style={styles.text}>Order Code: {finish.code}</Text>
              <Text style={styles.text}>{finish.description}</Text>
              <Text style={styles.text}>Sheen Level: {finish.sheenLevel}</Text>
              {finish.duluxMatch && (
                <Text style={styles.text}>Dulux Match: {finish.duluxMatch}</Text>
              )}
              {finish.colorbondMatch && (
                <Text style={styles.text}>Colorbond: {finish.colorbondMatch}</Text>
              )}
              {finish.lightReflectanceValue && (
                <Text style={styles.text}>LRV: {finish.lightReflectanceValue}%</Text>
              )}
              {finish.notes && (
                <Text style={styles.text}>{finish.notes}</Text>
              )}
            </View>
          ))}
        </View>
      ))}
    </Page>
  </Document>
);

export async function GET() {
  try {
    const stream = await renderToStream(<MyDocument />);
    const chunks: Buffer[] = [];
    
    for await (const chunk of stream) {
      chunks.push(chunk);
    }
    
    const pdf = Buffer.concat(chunks);
    
    return new NextResponse(pdf, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=doric-surface-finish-range.pdf',
      },
    });
  } catch (error) {
    console.error('PDF generation error:', error);
    return NextResponse.json({ error: 'Failed to generate PDF' }, { status: 500 });
  }
} 