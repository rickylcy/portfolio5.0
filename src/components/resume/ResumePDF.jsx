// src/components/resume/ResumePDF.jsx
import {
  Document,
  Font,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import fs from "node:fs";

const cjkRegularFont = "/System/Library/Fonts/Supplemental/Arial Unicode.ttf";
const hasCjkFont = fs.existsSync(cjkRegularFont);

if (hasCjkFont) {
  Font.register({
    family: "ResumeCJK",
    fonts: [
      { src: cjkRegularFont, fontWeight: 400 },
      { src: cjkRegularFont, fontWeight: 700 },
    ],
  });
}

const colors = {
  ink: "#111827",
  muted: "#4b5563",
  soft: "#6b7280",
  violet: "#4c1d95",
  violetSoft: "#ede9fe",
  border: "#e5e7eb",
  panel: "#f8fafc",
};

const styles = StyleSheet.create({
  page: {
    paddingTop: 24,
    paddingBottom: 22,
    paddingHorizontal: 30,
    fontFamily: "Helvetica",
    fontSize: 8.7,
    lineHeight: 1.26,
    color: colors.ink,
    backgroundColor: "#ffffff",
  },
  header: {
    paddingBottom: 9,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  name: {
    fontSize: 22,
    lineHeight: 1.08,
    fontWeight: 700,
    color: colors.violet,
    letterSpacing: -0.35,
  },
  title: {
    marginTop: 4,
    fontSize: 10.5,
    fontWeight: 700,
    color: colors.ink,
  },
  contactRow: {
    marginTop: 6,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  contactText: {
    marginRight: 10,
    marginBottom: 2,
    fontSize: 7.8,
    color: colors.muted,
  },
  link: {
    color: colors.violet,
    textDecoration: "none",
  },
  summaryPanel: {
    padding: 8,
    marginBottom: 7,
    borderRadius: 8,
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.border,
  },
  label: {
    marginBottom: 4,
    fontSize: 7.8,
    fontWeight: 700,
    color: colors.violet,
    textTransform: "uppercase",
    letterSpacing: 0.9,
  },
  summary: {
    fontSize: 8.7,
    color: colors.ink,
  },
  highlightRow: {
    flexDirection: "row",
  },
  highlight: {
    flex: 1,
    padding: 6,
    marginRight: 6,
    borderRadius: 6,
    backgroundColor: colors.violetSoft,
  },
  highlightText: {
    fontSize: 7.4,
    color: colors.violet,
  },
  section: {
    marginTop: 7,
  },
  sectionHeading: {
    paddingBottom: 2,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    fontSize: 9.5,
    fontWeight: 700,
    color: colors.violet,
    textTransform: "uppercase",
    letterSpacing: 0.7,
  },
  item: {
    marginBottom: 5,
  },
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 2,
  },
  itemTitle: {
    flex: 1,
    paddingRight: 8,
    fontSize: 8.9,
    fontWeight: 700,
    color: colors.ink,
  },
  period: {
    width: 92,
    textAlign: "right",
    fontSize: 7.6,
    color: colors.soft,
  },
  bulletRow: {
    flexDirection: "row",
    marginTop: 1.5,
  },
  bulletDot: {
    width: 9,
    fontSize: 7.4,
    color: colors.violet,
  },
  bulletText: {
    flex: 1,
    fontSize: 8,
    color: colors.muted,
  },
  footer: {
    position: "absolute",
    left: 34,
    right: 34,
    bottom: 10,
    paddingTop: 5,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    fontSize: 7,
    color: colors.soft,
    textAlign: "center",
  },
});

function ContactLine({ data }) {
  return (
    <View style={styles.contactRow}>
      <Text style={styles.contactText}>{data.header.location}</Text>
      <Link src={`mailto:${data.header.email}`} style={[styles.contactText, styles.link]}>
        {data.header.email}
      </Link>
      <Link src={`https://${data.header.github}`} style={[styles.contactText, styles.link]}>
        {data.header.github}
      </Link>
      <Link src={`https://${data.header.linkedin}`} style={[styles.contactText, styles.link]}>
        {data.header.linkedin}
      </Link>
    </View>
  );
}

function Bullet({ children }) {
  return (
    <View style={styles.bulletRow}>
      <Text style={styles.bulletDot}>•</Text>
      <Text style={styles.bulletText}>{children}</Text>
    </View>
  );
}

function ResumeItem({ item }) {
  return (
    <View style={styles.item} wrap={false}>
      <View style={styles.itemHeader}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        {item.period ? <Text style={styles.period}>{item.period}</Text> : null}
      </View>
      {item.bullets?.map((bullet) => (
        <Bullet key={bullet}>{bullet}</Bullet>
      ))}
    </View>
  );
}

function ResumeSection({ section }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionHeading}>{section.heading}</Text>
      {section.items.map((item) => (
        <ResumeItem key={item.title} item={item} />
      ))}
    </View>
  );
}

export default function ResumePDF({ data }) {
  const fontFamily = hasCjkFont ? "ResumeCJK" : "Helvetica";

  return (
    <Document
      title={`${data.header.name} Resume`}
      author={data.header.name}
      subject="Resume"
    >
      <Page size="A4" style={[styles.page, { fontFamily }]}>
        <View style={styles.header}>
          <Text style={styles.name}>{data.header.name}</Text>
          <Text style={styles.title}>{data.header.title}</Text>
          <ContactLine data={data} />
        </View>

        <View style={styles.summaryPanel}>
          <Text style={styles.label}>{data.summaryLabel}</Text>
          <Text style={styles.summary}>{data.summary}</Text>
        </View>

        {data.sections.map((section) => (
          <ResumeSection key={section.heading} section={section} />
        ))}

        <Text style={styles.footer}>
          {data.header.name} • {data.header.title} • {data.header.email}
        </Text>
      </Page>
    </Document>
  );
}
