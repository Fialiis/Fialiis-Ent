import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

export default function FialiisDemo() {
  const [transactions, setTransactions] = useState([
    {
      title: "Logo Design",
      amount: "800 €",
      type: "Prestation",
      status: "En attente",
      date: "05/06/25"
    },
    {
      title: "Achat PC",
      amount: "1 200 €",
      type: "Bien",
      status: "Validée",
      date: "04/06/25"
    }
  ]);

  const [newTx, setNewTx] = useState({ title: "", amount: "", type: "", email: "", details: "" });

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="flex items-center justify-between p-6 shadow-md">
        <img src="/fialiis-logo.png" alt="FiaLiis logo" className="h-12" />
        <Button>Connexion</Button>
      </header>

      <Tabs defaultValue="home">
        <TabsList className="grid grid-cols-5 p-4 shadow-sm">
          <TabsTrigger value="home">Accueil</TabsTrigger>
          <TabsTrigger value="create">Créer</TabsTrigger>
          <TabsTrigger value="mytx">Mes transactions</TabsTrigger>
          <TabsTrigger value="admin">Admin</TabsTrigger>
          <TabsTrigger value="contact">À propos</TabsTrigger>
        </TabsList>

        {/* Home */}
        <TabsContent value="home">
          <section className="bg-[#002c71] text-white py-20 text-center px-6">
            <h1 className="text-4xl font-bold mb-4">Parce que la confiance, ça se prouve</h1>
            <Button className="text-lg bg-white text-[#002c71] hover:bg-gray-200">Créer une transaction</Button>
          </section>

          <section className="py-16 px-8">
            <h2 className="text-3xl font-bold mb-10 text-center">Comment ça marche</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              {["Création du contrat", "Dépôt des fonds", "Livraison ou réalisation", "Libération des fonds"].map((step, idx) => (
                <Card key={idx} className="shadow-md">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2">Étape {idx + 1}</h3>
                    <p>{step}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="bg-gray-50 py-16 px-8">
            <h2 className="text-3xl font-bold mb-10 text-center">Pourquoi choisir FiaLiis ?</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {["Sécurité juridique et financière", "Transparence du processus", "Plateforme simple et intuitive"].map((adv, idx) => (
                <Card key={idx} className="shadow-md">
                  <CardContent className="p-6">
                    <p>{adv}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="py-16 px-8">
            <h2 className="text-3xl font-bold mb-10 text-center">Témoignages</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {["Grâce à FiaLiis, j’ai pu vendre mon PC en toute sécurité.", "Une solution claire et rapide pour mes prestations en freelance."].map((quote, idx) => (
                <Card key={idx} className="shadow-md">
                  <CardContent className="p-6">
                    <p>“{quote}”</p>
                    <p className="mt-2 text-sm text-gray-500">— {idx === 0 ? "Marie" : "Julien"}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="bg-[#0d73c5] text-white py-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Démarrez votre première transaction</h2>
            <Button className="bg-white text-[#0d73c5] hover:bg-gray-100">Créer une transaction</Button>
          </section>
        </TabsContent>

        {/* Créer une transaction */}
        <TabsContent value="create">
          <div className="p-6 max-w-xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Nouvelle transaction</h2>
            <Input placeholder="Titre de la transaction" className="mb-4" value={newTx.title} onChange={e => setNewTx({ ...newTx, title: e.target.value })} />
            <Input placeholder="Montant (€)" className="mb-4" value={newTx.amount} onChange={e => setNewTx({ ...newTx, amount: e.target.value })} />
            <Input placeholder="Type (Bien / Prestation)" className="mb-4" value={newTx.type} onChange={e => setNewTx({ ...newTx, type: e.target.value })} />
            <Input placeholder="Email du bénéficiaire" className="mb-4" value={newTx.email} onChange={e => setNewTx({ ...newTx, email: e.target.value })} />
            <Textarea placeholder="Détails de la transaction" className="mb-4" value={newTx.details} onChange={e => setNewTx({ ...newTx, details: e.target.value })} />
            <Button onClick={() => setTransactions([...transactions, { ...newTx, status: "En attente", date: "05/06/25" }])}>Envoyer pour validation</Button>
          </div>
        </TabsContent>

        {/* Mes Transactions */}
        <TabsContent value="mytx">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Mes transactions</h2>
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="p-2">Titre</th>
                    <th className="p-2">Montant</th>
                    <th className="p-2">Type</th>
                    <th className="p-2">Statut</th>
                    <th className="p-2">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((tx, idx) => (
                    <tr key={idx} className="border-b">
                      <td className="p-2">{tx.title}</td>
                      <td className="p-2">{tx.amount}</td>
                      <td className="p-2">{tx.type}</td>
                      <td className="p-2"><Badge>{tx.status}</Badge></td>
                      <td className="p-2">{tx.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>

        {/* Admin */}
        <TabsContent value="admin">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Tableau de bord Admin</h2>
            <p>Nombre total de transactions : {transactions.length}</p>
            <p className="mt-2">Montant total bloqué estimé : {(transactions.reduce((sum, tx) => sum + parseFloat(tx.amount.replace(/[^0-9.-]+/g, "")), 0)).toFixed(2)} €</p>
          </div>
        </TabsContent>

        {/* Contact / À propos */}
        <TabsContent value="contact">
          <div className="p-6 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">À propos de FiaLiis</h2>
            <p className="mb-2">Mission : instaurer la confiance entre parties lors de transactions sensibles.</p>
            <p className="mb-2">Vision : devenir la référence de l’entiercement en ligne.</p>
            <p>Contact : <a href="mailto:contact@fialiis.com" className="underline">contact@fialiis.com</a></p>
          </div>
        </TabsContent>
      </Tabs>

      <footer className="bg-gray-100 text-center text-sm py-6">
        CGU • Mentions légales • Politique de confidentialité
      </footer>
    </div>
  );
}