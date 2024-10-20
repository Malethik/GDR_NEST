-- DropForeignKey
ALTER TABLE "Ability" DROP CONSTRAINT "Ability_characterId_fkey";

-- CreateTable
CREATE TABLE "_AbilityToCharacter" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AbilityToCharacter_AB_unique" ON "_AbilityToCharacter"("A", "B");

-- CreateIndex
CREATE INDEX "_AbilityToCharacter_B_index" ON "_AbilityToCharacter"("B");

-- AddForeignKey
ALTER TABLE "_AbilityToCharacter" ADD CONSTRAINT "_AbilityToCharacter_A_fkey" FOREIGN KEY ("A") REFERENCES "Ability"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AbilityToCharacter" ADD CONSTRAINT "_AbilityToCharacter_B_fkey" FOREIGN KEY ("B") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;
